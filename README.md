# 🗺️ Carte Offline N-1

Une application web progressive (PWA) légère permettant de visualiser des plans techniques hors-ligne, de géo-référencer des équipements et de capturer des données terrain sans connexion internet.

## ✨ Fonctionnalités

*   **Mode Hors-ligne Total** : Utilise l'API `CacheStorage` et les `Service Workers` pour stocker et servir les tuiles de cartes localement.
*   **Importation ZIP** : Chargez vos propres tuiles de cartes directement depuis une archive `.zip`.
*   **Multi-niveaux** : Gestion de différents étages ou strates (RDC, N-1, N+1, N+2).
*   **Relevé d'Équipements** : 
    *   Ajout de marqueurs par simple clic sur la carte.
    *   Formulaire de saisie (Tag, Type d'équipement).
    *   Capture photo avec renommage automatique selon le Tag.
*   **Export de Données** : Génération d'un fichier CSV des relevés et préparation d'un e-mail d'envoi.
*   **Logs Système** : Console intégrée pour le suivi en temps réel des opérations (import, cache, erreurs).

## 🚀 Installation Rapide

1.  **Hébergement** : Déployez les fichiers sur un serveur supportant le HTTPS (nécessaire pour le Service Worker et l'accès caméra).
2.  **Fichiers Requis** :
    *   `index.html` (le code principal).
    *   `sw.js` (le fichier Service Worker pour la gestion du cache).
3.  **Bibliothèques Externes** (chargées via CDN) : Leaflet.js, JSZip.

## 📂 Structure du ZIP de Cartes

Pour que l'importation fonctionne, votre archive ZIP doit respecter la structure de dossiers suivante :

```text
archive.zip
├── rdc/
│   └── {z}/{x}/{y}.png
├── n-1/
│   └── {z}/{x}/{y}.png
└── ... (autres niveaux)
```

## 🛠️ Utilisation

### 1. Charger la carte
*   Cliquez sur **"Choisir un fichier"** et sélectionnez votre archive `.zip`.
*   Attendez que les logs affichent le succès de l'importation (ex: `Succès : 450 tuiles`).
*   Sélectionnez le niveau souhaité dans le menu déroulant.

### 2. Ajouter un équipement
*   Cliquez sur un emplacement précis de la carte.
*   Remplissez le nom du **Tag** et le **Type**.
*   Prenez une photo si nécessaire (elle sera automatiquement téléchargée sur votre appareil sous le nom `TAG.jpg`).
*   Cliquez sur **Enregistrer**.

### 3. Exporter les données
*   Utilisez le bouton **"📧 Envoyer CSV"** pour télécharger le récapitulatif et ouvrir votre application de messagerie.
*   Utilisez **"🗑️ Vider Liste"** pour réinitialiser les données locales (`localStorage`).

## ⚙️ Détails Techniques

*   **Moteur de carte** : [Leaflet 1.9.4](https://leafletjs.com/)
*   **Stockage local** : 
    *   `CacheStorage` pour les images (tuiles).
    *   `LocalStorage` pour les données textuelles des équipements.
*   **Format d'export** : CSV (séparateur point-virgule `;`).

## ⚠️ Notes Importantes

*   **Service Worker** : Assurez-vous de créer un fichier `sw.js` (même vide ou configuré pour le cache statique) à la racine, sinon certaines fonctionnalités de mise en cache pourraient être limitées.
*   **Permissions** : L'application demandera l'accès à la caméra pour la capture de photos d'équipements.
*   **Navigateurs** : Optimisé pour Chrome (Android) et Safari (iOS).
