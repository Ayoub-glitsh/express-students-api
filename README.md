# Express Students API (Architecture MVC)

Une API REST complète pour la gestion des étudiants, construite avec Node.js, Express.js et MongoDB (Mongoose).

## Fonctionnalités

- **Lister** tous les étudiants
- **Afficher** un étudiant par ID
- **Ajouter** un nouvel étudiant
- **Modifier** les informations d'un étudiant
- **Supprimer** un étudiant

## Installation

1. Cloner le repository
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Créer un fichier `.env` à la racine et ajouter :
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   ```
4. Lancer le serveur :
   ```bash
   npm run dev
   ```

## Routes API

- `GET /api/etudiants` - Liste des étudiants
- `GET /api/etudiants/:id` - Un étudiant spécifique
- `POST /api/etudiants` - Ajouter un étudiant
- `PUT /api/etudiants/:id` - Modifier un étudiant
- `DELETE /api/etudiants/:id` - Supprimer un étudiant
