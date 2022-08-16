## Groupomania -

Projet 7 de la formation développeur web OPENCLASSROOMS

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. 

### Technologies utilisées pour le backend

- Node.js pour la gestion du serveur
- Express pour la mise en place de l'application
- JsonWebToken pour la création des tokens uniques
- Multer pour la gestion des images
- Bcrypt pour le hashage des mots de passe
- Dotenv pour la création d'un fichier de configuration contenant des variables d'environnement
- Base de données SQL hébergé sur PlanetScale
- Prisma comme outil ORM afin de simplifier le code

### Technologies utilisées pour le frontend

- Vue JS 
- Bootstrap

### Procédure pour lancer le projet sur votre machine

1. `git clone`ce repo github
2. Effectuez la commande `npm intall` dans le dossier `frontend` puis `backend` afin d'installer les dépendances
3. Renommez les fichiers `.env.copy` en `.env`
4. Remplissez-les avec vos variables d'environnement personnelles
5. Exécutez la commande `npm run dev` dans le terminal côté back et, côté front

### Guide d'utilisation de Prisma pour intéragir avec la base de données

Les schémas de la base de données se trouve dans le fichier `schema.prisma`

Pour pouvoir créer vos Tables, ou si vous souhaitez apporter des modifications à vos schémas, vous devrez exécuter la commande: `npx prisma db push` 