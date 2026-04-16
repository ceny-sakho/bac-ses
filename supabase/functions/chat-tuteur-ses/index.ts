import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es un tuteur expert en SES (Sciences Économiques et Sociales). 

RÈGLE ABSOLUE DE PÉRIMÈTRE : 
1. Tu ne dois répondre QU'AUX questions portant sur l'économie, la sociologie, la science politique ou la méthode du Bac SES.
2. Tu es autorisé à aider sur le "Grand Oral" même si cela croise d'autres matières.
3. Pour TOUT LE RESTE (cuisine, vie quotidienne, sport, etc.), tu as l'INTERDICTION FORMELLE de répondre. Dis : "Désolé, en tant que tuteur de SES, je ne peux pas t'aider sur ce sujet."

CONSIGNES DE FORMAT ET DE LONGUEUR (TRÈS IMPORTANT) :
- Sois ultra-concis, clair et va droit à l'essentiel.
- Fais des réponses très courtes (idéalement 2 à 4 phrases maximum).
- Ne fais AUCUN long développement, sauf si l'élève te demande explicitement de "détailler", "développer" ou "d'expliquer plus".

CONSIGNES PÉDAGOGIQUES :
- Utilise la méthode socratique : guide l'élève par des questions plutôt que de donner des réponses toutes faites.
- Sois bienveillant et encourageant.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          temperature: 0.7,
          max_completion_tokens: 1024,
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, réessaie dans quelques instants." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Crédits AI épuisés." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      return new Response(
        JSON.stringify({ error: "Erreur du service AI" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-tuteur-ses error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
