
# Plan : Rendre les questions EC1 dynamiques et cliquables

## Objectif
Permettre aux utilisateurs de cliquer sur chaque question EC1 pour accéder a une page dediee avec un lecteur PDF et un bouton de telechargement, suivant le meme modele que les dissertations et EC3.

## Structure des fichiers PDF
Les PDF seront stockes dans GitHub selon la structure :
```
public/ec1/chapitre{numero}/sujet-{numero}.pdf
```
Exemple : `public/ec1/chapitre1/sujet-1.pdf`

---

## Modifications a effectuer

### 1. Creer la page EC1Subject
**Fichier** : `src/pages/EC1Subject.tsx` (nouveau fichier)

Cette page reprendra le design de EC3Subject :
- Titre en haut : "EC1 Chapitre X - Sujet Y"
- Lecteur PDF centre (embed)
- Bouton "Telecharger le PDF" en dessous
- Bouton "Retour" pour revenir a la liste

Le chemin PDF sera construit dynamiquement :
```
/ec1/chapitre${chapter}/sujet-${sujetNumber}.pdf
```

---

### 2. Creer un nouveau composant TopicsTable pour EC1
**Fichier** : `src/components/ec1/TopicsTable.tsx` (nouveau fichier)

Ce composant remplacera le composant generique actuel et ajoutera la navigation au clic sur chaque ligne. Il sera base sur le modele de `src/components/ec3/TopicsTable.tsx` :
- Chaque ligne du tableau sera cliquable
- Au clic, navigation vers `/ec1/{chapter}/sujet/{index + 1}`

---

### 3. Modifier le composant EC1Topics
**Fichier** : `src/components/EC1Topics.tsx`

Modifications :
- Importer le nouveau TopicsTable depuis `./ec1/TopicsTable`
- Passer le parametre `chapter` au composant TopicsTable

---

### 4. Ajouter la route EC1Subject dans App.tsx
**Fichier** : `src/App.tsx`

Ajouter :
- Import de EC1Subject
- Route : `/ec1/:chapterId/sujet/:sujetId`

---

### 5. Creer la structure de dossiers PDF
**Fichier** : `public/ec1/chapitre1/.gitkeep` (et autres chapitres)

Creer les dossiers pour les 12 chapitres :
```
public/ec1/chapitre1/.gitkeep
public/ec1/chapitre2/.gitkeep
...
public/ec1/chapitre12/.gitkeep
```

---

## Resume des fichiers

| Action | Fichier |
|--------|---------|
| Creer | `src/pages/EC1Subject.tsx` |
| Creer | `src/components/ec1/TopicsTable.tsx` |
| Modifier | `src/components/EC1Topics.tsx` |
| Modifier | `src/App.tsx` |
| Creer | `public/ec1/chapitre{1-12}/.gitkeep` |

---

## Details techniques

### EC1Subject.tsx (nouveau)
```text
Structure :
- useParams pour recuperer chapterId et sujetId
- Construction du chemin PDF : /ec1/chapitre{X}/sujet-{Y}.pdf
- Affichage : titre, embed PDF, bouton telechargement
```

### TopicsTable EC1 (nouveau)
```text
Structure :
- Props : topics (EC1Topic[]), chapter (string)
- useNavigate pour la navigation
- handleTopicClick : navigate vers /ec1/{chapter}/sujet/{index+1}
- Tableau avec colonnes : Question EC1, Annee, Lieu
- Chaque ligne cliquable avec hover effect
```

### Route App.tsx
```text
<Route path="/ec1/:chapterId/sujet/:sujetId" element={<EC1Subject />} />
```
