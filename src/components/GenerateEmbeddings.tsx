import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";
const VOYAGE_API_KEY = "pa-yGdft9DXXoKTs2EdzrJuGPXyAKH6sdIMjAVfyCJqRVJ";

async function getEmbedding(text: string): Promise<number[]> {
  const res = await fetch(VOYAGE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "voyage-3-lite",
      input: [text],
      input_type: "document",
    }),
  });
  if (!res.ok) throw new Error(`Voyage API error ${res.status}`);
  const data = await res.json();
  return data.data[0].embedding;
}

const GenerateEmbeddings: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const handleGenerate = async () => {
    setLoading(true);
    setProgress({ done: 0, total: 0 });

    try {
      const { data: docs, error } = await supabase
        .from("documents")
        .select("id, content")
        .is("embedding", null);

      if (error) throw error;
      if (!docs || docs.length === 0) {
        toast.info("Tous les documents ont déjà un embedding !");
        setLoading(false);
        return;
      }

      setProgress({ done: 0, total: docs.length });
      let successCount = 0;

      for (let i = 0; i < docs.length; i++) {
        try {
          console.log(`[Embeddings] ${i + 1}/${docs.length} — doc ${docs[i].id}`);
          const embedding = await getEmbedding(docs[i].content);
          console.log(`[Embeddings] Vecteur reçu: ${embedding.length} dimensions`);

          // Envoyer comme array natif, pas comme string JSON
          const { error: updateError } = await supabase
            .from("documents")
            .update({ embedding: embedding as any })
            .eq("id", docs[i].id);

          if (updateError) {
            console.error(`[Embeddings] Erreur update doc ${docs[i].id}:`, JSON.stringify(updateError));
            toast.error(`Erreur update doc ${docs[i].id}: ${updateError.message}`);
          } else {
            console.log(`[Embeddings] ✅ Doc ${docs[i].id} mis à jour`);
            successCount++;
          }
        } catch (err: any) {
          console.error(`[Embeddings] ❌ Doc ${docs[i].id}:`, err?.message || err);
          toast.error(`Erreur doc ${docs[i].id}: ${err?.message}`);
        }
        setProgress({ done: i + 1, total: docs.length });

        // Pause 500ms entre chaque appel pour éviter le rate-limit 429
        if (i < docs.length - 1) {
          await new Promise(r => setTimeout(r, 500));
        }
      }

      toast.success(`${successCount}/${docs.length} embeddings générés avec succès !`);
    } catch (err) {
      console.error("Erreur génération embeddings:", err);
      toast.error("Erreur lors de la génération des embeddings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[9998]">
      <Button style={{ display: 'none' }} onClick={handleGenerate} disabled={loading} variant="outline" className="gap-2">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {progress.done}/{progress.total}
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Générer Embeddings
          </>
        )}
      </Button>
    </div>
  );
};

export default GenerateEmbeddings;
