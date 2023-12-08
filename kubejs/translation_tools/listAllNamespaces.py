import os, json
open("allAssetNamespaces.json", "w").write(json.dumps( {
    "namespaces" :[ folder for folder in os.listdir('.') if os.path.isdir(folder)]
}, indent=4))