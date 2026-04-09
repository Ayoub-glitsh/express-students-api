
# 🎓 Student Management API - Architecture MVC

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

Une solution backend robuste et scalable pour la gestion des données étudiantes, construite avec une architecture **MVC (Model-View-Controller)** stricte.

---

## 📸 Galerie du Projet

<div align="center">
  <h3>Architecture MVC</h3>
  <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/f_auto,q_auto/mvc_di6uyb" width="600" alt="MVC Architecture" />
  <br><br>
  <h3>Dashboard Étudiant (Concept)</h3>
  <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/f_auto,q_auto/dashboard_fwbxly" width="600" alt="Dashboard Mockup" />
  <br><br>
  <h3>Test API avec Postman</h3>
  <img src="https://res.cloudinary.com/dqgsl5uu4/image/upload/f_auto,q_auto/post_method_image_dxttuf" width="600" alt="Postman Request" />
</div>

---

## 🚀 Fonctionnalités

- ✅ **CRUD Complet** : Création, Lecture, Mise à jour et Suppression d'étudiants.
- 🔍 **Recherche par ID** : Récupération précise des informations d'un étudiant.
- 🛡️ **Validation des Données** : Utilisation de schémas Mongoose pour garantir l'intégrité des données (email unique, champs obligatoires).
- 🗃️ **Architecture MVC** : Séparation claire des responsabilités pour une maintenance facile.
- ⚙️ **Gestion d'Environnement** : Configuration sécurisée via `dotenv`.

---

## 📂 Structure du Projet

```text
├── config/
│   └── db.js            # Configuration et connexion à MongoDB
├── controllers/
│   └── etudiantController.js # Logique métier et gestion des requêtes
├── models/
│   └── Etudiant.js      # Schéma Mongoose pour l'étudiant
├── routes/
│   └── etudiantRoutes.js # Définition des points d'entrée de l'API
├── assets/              # Images et ressources du README
├── .env                # Variables d'environnement (non incluses dans Git)
├── .gitignore          # Fichiers à ignorer par Git
├── package.json        # Dépendances et scripts
└── server.js           # Point d'entrée principal de l'application
```

---

## 🛠️ Installation et Utilisation

### Prérequis
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local ou Atlas)

### Étapes
1. **Cloner le repository**
   ```bash
   git clone https://github.com/Ayoub-glitsh/express-students-api.git
   cd express-students-api
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env` à la racine :
   ```env
   PORT=3000
   MONGO_URI=vos_identifiants_mongodb
   ```

4. **Lancer l'application**
   - Mode production : `npm start`
   - Mode développement (avec Nodemon) : `npm run dev`

---

## 📡 API Endpoints

| Méthode | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/etudiants` | Récupérer tous les étudiants | - |
| **GET** | `/api/etudiants/:id` | Récupérer un étudiant par ID | - |
| **POST** | `/api/etudiants` | Créer un nouvel étudiant | `{nom, prenom, email, age, filiere}` |
| **PUT** | `/api/etudiants/:id` | Modifier un étudiant | `{nom, age, ...}` |
| **DELETE** | `/api/etudiants/:id` | Supprimer un étudiant | - |

---

## 🧪 Exemple de Requête POST (JSON)

```json
{
  "nom": "Alami",
  "prenom": "Mehdi",
  "email": "mehdi.alami@example.com",
  "age": 21,
  "filiere": "Informatique"
}
```

---

## 📄 License

Distribué sous la licence **ISC**.

---
<div align="center">
  Développé par Ayoub Aguezar
</div>
