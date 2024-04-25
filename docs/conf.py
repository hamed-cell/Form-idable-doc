# Configuration file for the Sphinx documentation builder.

# -- Path setup --------------------------------------------------------------

import os
import sys
sys.path.insert(0, os.path.abspath('..'))  # Assurez-vous que ce chemin correspond à la racine de votre projet

# -- Project information -----------------------------------------------------

project = 'formidable'
copyright = '2023,ATTAR'
author = 'ATTAR hamed'

# -- General configuration ---------------------------------------------------

extensions = [
    'sphinx.ext.autodoc',  # Génère automatiquement la documentation à partir des docstrings
    'sphinx.ext.napoleon',  # Support pour Google style docstrings
    'sphinx.ext.viewcode',  # Ajoute des liens vers le code source
    'sphinx.ext.githubpages',  # Crée des fichiers .nojekyll pour GitHub Pages
]

templates_path = ['_templates']
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------

# Le thème à utiliser pour les pages HTML et HTML Help.
html_theme = 'alabaster'  # Vous pouvez changer ce thème en un autre comme 'sphinx_rtd_theme'

# Configuration supplémentaire du thème
html_static_path = ['_static']  # Répertoire pour les fichiers statiques personnalisés
