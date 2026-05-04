# TuilesCarte

**TuilesCarte** est un outil conçu pour manipuler, télécharger ou assembler des tuiles cartographiques. Il permet de travailler avec des services de cartes (type OpenStreetMap, Google Maps, etc.) pour générer des fonds de cartes locaux ou des assemblages d'images.



## 🚀 Fonctionnalités

*   **Téléchargement de tuiles** : Récupération automatique des images selon les niveaux de zoom (Z) et les coordonnées (X, Y).
*   **Assemblage (Stitching)** : Fusion de plusieurs tuiles pour créer une image unique à haute résolution.
*   **Gestion des coordonnées** : Conversion entre coordonnées géographiques (Latitude/Longitude) et coordonnées de tuiles.
*   **Support multi-sources** : Configuration facile pour utiliser différents fournisseurs de tuiles (OSM, Stamen, Satellite).

## 🛠️ Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/Omega37160/TuilesCarte.git
    cd TuilesCarte
    ```

2.  Installez les dépendances (exemple courant) :
    ```bash
    pip install -r requirements.txt
    
```

## 📖 Utilisation

### Configuration
Éditez le fichier de configuration pour définir la zone géographique et les niveaux de zoom souhaités :

```json
{
  "zoom_min": 10,
  "zoom_max": 15,
  "provider": "openstreetmap"
}
```

### Lancement
Pour générer une carte, lancez le script principal :
```bash
python main.py --lat 47.38 --lon 0.69 --radius 5km
```

## 🗺️ Structure du Système de Tuiles
Le projet repose sur la hiérarchie standard des tuiles web où chaque niveau de zoom divise le monde en $2^z \times 2^z$ tuiles.



## 🤝 Contribution
Les contributions sont les bienvenues ! 
