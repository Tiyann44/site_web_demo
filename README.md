# Festival de Musique Classique en Bretagne

Site web statique pour le Festival de Musique Classique en Bretagne, organisé près de la Côte de Granit Rose.

## Structure du projet

<!-- Updated structure to reflect new folder organization -->
Le site est organisé en 3 dossiers principaux :

\`\`\`
.
├── index.html              # Page d'accueil
├── programme.html          # Programme des concerts
├── artistes.html           # Présentation des artistes et groupes
├── galerie.html            # Galerie photos
├── partenaires.html        # Liste des partenaires
├── mentions-legales.html   # Mentions légales et RGPD
├── css/
│   └── styles.css         # Feuille de styles principale
├── js/
│   └── script.js          # Scripts JavaScript
└── images/                # Images et photos
\`\`\`

## Caractéristiques

- **Design responsive** : S'adapte automatiquement aux téléphones, tablettes et ordinateurs
- **Accessibilité optimisée** : Navigation au clavier, lecteurs d'écran, contraste WCAG AA
- **Compatible tous navigateurs** : Chrome, Firefox, Edge, Safari
- **Performances optimales** : Chargement rapide, images optimisées
- **Sans dépendances** : HTML, CSS et JavaScript purs

## Technologies utilisées

- HTML5 sémantique
- CSS3 avec variables personnalisées
- JavaScript vanilla (ES6+)
- Google Fonts (Crimson Pro & Inter)

## Accessibilité

Le site respecte les standards WCAG 2.1 niveau AA :
- Navigation au clavier complète
- Liens de navigation rapide
- Attributs ARIA appropriés
- Textes alternatifs pour toutes les images
- Contraste de couleurs conforme
- Structure sémantique HTML5

## Hébergement sur GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers (HTML, CSS, JS, images)
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` comme source
5. Votre site sera disponible à : `https://votre-username.github.io/nom-du-repo/`

## Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/styles.css` :
\`\`\`css
:root {
  --primary: #1e3a5f;      /* Bleu marine principal */
  --accent: #5fa8d3;        /* Bleu clair accent */
  --secondary: #d4a5a5;     /* Rose granit */
}
\`\`\`

### Contenu
- Remplacez les textes dans les fichiers HTML
- Ajoutez vos propres images dans le dossier `images/`
- Mettez à jour l'ID vidéo YouTube dans `index.html`

## Support

Pour toute question : contact@festival-bretagne.fr

## Licence

© 2025 Festival de Musique Classique en Bretagne. Tous droits réservés.
