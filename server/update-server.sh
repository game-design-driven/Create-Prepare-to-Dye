if [ -d mods ]; then
    echo "deleting mods directory"
    rm -rf mods
    else
        echo "mods directory not found"
    fi
fi

if [ -d config ]; then
    echo "deleting config directory"
    rm -rf config
    else
        echo "config directory not found"
    fi
fi

if [ -d kubejs ]; then
    echo "deleting kubejs directory"
    rm -rf kubejs
    else
        echo "kubejs directory not found"
    fi
fi

if [ -d defaultconfigs ]; then
    echo "deleting defaultconfigs directory"
    rm -rf defaultconfigs
    else
        echo "defaultconfigs directory not found"
    fi
fi

if [ ! -d mods ]; then
    if [ -d ../mods ]; then
        echo "copying mods from parent folder"
        cp -r ../mods .
    else
        echo "Mods directory not found in parent folder, starting server without mods"
    fi
fi

if [ ! -d config ]; then
    if [ -d ../config ]; then
        echo "copying config from parent folder"
        cp -r ../config .
    else
        echo "config directory not found in parent folder, starting server without config"
    fi
fi

if [ ! -d kubejs ]; then
    if [ -d ../kubejs ]; then
        echo "copying kubejs from parent folder"
        cp -r ../kubejs .
    else
        echo "kubejs directory not found in parent folder, starting server without KubeJS"
    fi
fi

if [ ! -d defaultconfigs ]; then
    if [ -d ../defaultconfigs ]; then
        echo "copying defaultconfigs from parent folder"
        cp -r ../defaultconfigs .
    else
        echo "defaultconfigs directory not found in parent folder, starting server without defaultconfigs"
    fi
fi