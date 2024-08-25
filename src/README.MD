# Éditeur de texte en React.js

**Éditeur de texte en React.js** est une application simple qui permet de rédiger et de prévisualiser du texte au format Markdown en temps réel. Ce projet a été développé en **React.js** avec **Bootstrap** pour le style, et utilise la bibliothèque **marked** pour convertir le texte Markdown en HTML.

**lien vers le site :** : https://editeur-de-texte-en-react-js.onrender.com

## Fonctionnalités

- **Édition en temps réel** : Modifiez le texte dans un éditeur de texte et voyez instantanément la prévisualisation du rendu HTML.
- **Sauvegarde automatique** : Le texte est automatiquement sauvegardé dans le `localStorage`, vous pouvez ainsi reprendre votre travail là où vous l'avez laissé.
- **Support du Markdown** : Convertissez votre texte écrit en Markdown en HTML grâce à la bibliothèque `marked`.

## Structure du Projet

Le projet est organisé comme suit :

```
|-- public/
|-- src/
|   |   |-- App.js
|   |-- assets/
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

- **src/assets/** : Peut contenir des fichiers statiques tels que des images, des polices, etc.

## Installation

### Prérequis

- **Node.js** version 16 ou supérieure
- **npm** ou **yarn** pour la gestion des packages

### Étapes d'installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/editeur-de-texte-en-react-js.git
   cd editeur-de-texte-en-react-js
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Lancez l'application** :
   ```bash
   npm start
   ```
   ou
   ```bash
   yarn start
   ```

   L'application devrait s'ouvrir automatiquement dans votre navigateur par défaut à l'adresse `http://localhost:3000`.

## Utilisation

- **Éditeur de texte** : Dans la section de gauche, vous pouvez saisir du texte en utilisant la syntaxe Markdown.
- **Prévisualisation** : La section de droite affiche le rendu HTML du texte Markdown que vous avez saisi.
- **Sauvegarde automatique** : Le texte est automatiquement sauvegardé dans le `localStorage` à chaque modification. Si vous rechargez la page ou fermez le navigateur, votre texte sera restauré.

## Exemple de Code

Voici un extrait du code principal de l'application :

```javascript
import { useEffect, useState } from 'react';
import { sampleText } from './sampleText';
import { marked } from 'marked';

function App() {
  const renderText = text => marked(text, { sanitize: false });
  const [Text, setText] = useState(sampleText);

  useEffect(() => {
    let texte = localStorage.getItem('text');
    if (texte) {
      setText(texte);
    } else {
      setText(sampleText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('text', Text);
  }, [Text]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            defaultValue={Text}
            rows={35}
            className="form-control"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={{ __html: renderText(Text) }} />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## Technologies Utilisées

- **React.js** : Pour la construction de l'interface utilisateur.
- **Bootstrap** : Pour le style et la mise en page responsive.
- **Marked** : Pour la conversion de Markdown en HTML.

## Licence

Ce projet est sous licence ISC. 

## Remerciements

Merci à tous les contributeurs et utilisateurs de ce projet. Votre soutien est grandement apprécié !
