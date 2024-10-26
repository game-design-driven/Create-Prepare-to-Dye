#!/bin/sh
set -eu
FORGE_VERSION="43.4.4"
MC_VERSION="1.19.2"
PACK_NAME="Create: Prepare to Dye"
MTD_SUFFIX=" - Server"
# Credit to @jeremiahwinsley for template https://github.com/AllTheMods/atm6-packaging/blob/main/templates/startserver-template-18.sh
MIRROR="https://maven.allthehosting.com/releases/" # atm mirror
MIRROR="https://maven.minecraftforge.net/"         # forge mirror
INSTALLER="forge-${MC_VERSION}-${FORGE_VERSION}-installer.jar"
FORGE_URL="${MIRROR}net/minecraftforge/forge/${MC_VERSION}-${FORGE_VERSION}/forge-${MC_VERSION}-${FORGE_VERSION}-installer.jar"

echo + This script can generate, update and run a server.
echo "+ When runnig this script, it will take the relevent data from the modpack folder (parent folder or folder supplied as first argument) into the current folder if they are not already there or if there is an update (version file is different), then it will run the server."
MODPACK_DIR=${1:-${MODPACK_DIR:-..}}
echo "+ modpack folder : $(realpath "$MODPACK_DIR")"
# exit 0

pause() {
    printf "%s\n" "Press enter to continue..."
    read
}

delete_directory() {
    if [ -d "$1" ]; then
        echo "deleting $1 directory"
        rm -rf "$1"
    fi
}

grab_directory() {
    if [ -d "${MODPACK_DIR}"/"$1" ]; then
        echo "grabbing $1 from modpack folder"
        cp -r "${MODPACK_DIR}"/"$1" .
    else
        echo "$1 directory not found in parent folder, continuing without $1"
    fi
}

if ! command -v "${JAVA_PATH:-java}" >/dev/null 2>&1; then
    echo "Minecraft ${MC_VERSION} requires Java 17 - Java not found. Either update java, or pass the path to the java.exe with the environment variable JAVA_PATH"
    pause
    exit 1
fi

if [ -e VERSION ]; then # only check for updates if there is a VERSION file in the current folder
    if [ -e "${MODPACK_DIR}"/VERSION ]; then
        echo "VERSION file found in modpack folder, checking if it is the same as the current version"
        if cmp -s VERSION "${MODPACK_DIR}"/VERSION; then
            echo "VERSION file is the same, no need to update"
        else
            echo "current version $(cat VERSION) is different from the version in the modpack folder $(cat "${MODPACK_DIR}"/VERSION) updating"
            delete_directory mods
            delete_directory config
            delete_directory kubejs
            delete_directory defaultconfigs
            rm -rf VERSION
        fi
    fi
fi

if [ ! -e VERSION ]; then
    echo grabing game data from modack folder
    grab_directory mods
    echo "Removing client-side mods" && rm -rf mods/zume* || echo ""
    grab_directory config
    grab_directory kubejs
    grab_directory defaultconfigs
    cp "${MODPACK_DIR}"/VERSION VERSION || echo "Failed to copy VERSION file"
fi
cd "$(dirname "$0")"
if [ ! -d libraries ]; then
    echo "Forge not installed, installing now."
    if [ ! -f "$INSTALLER" ]; then
        echo "No Forge installer found, downloading now."
        if command -v wget >/dev/null 2>&1; then
            echo "DEBUG: (wget) Downloading $FORGE_URL"
            wget -O "$INSTALLER" "$FORGE_URL"
        else
            if command -v curl >/dev/null 2>&1; then
                echo "DEBUG: (curl) Downloading $FORGE_URL"
                curl -o "$INSTALLER" -L "$FORGE_URL"
            else
                echo "Neither wget or curl were found on your system. Please install one and try again"
                pause
                exit 1
            fi
        fi
    fi

    echo "Running Forge installer."
    "${JAVA_PATH:-java}" -jar "$INSTALLER" -installServer -mirror "$MIRROR"
fi

if [ ! -e server.properties ]; then
    echo "Copying default.server.properties to server.properties"
    cat default.server.properties >server.properties || echo "Failed to copy default.server.properties, will let minecraft server generate them on it's own"
    printf "allow-flight=true\nmotd=${PACK_NAME}${MTD_SUFFIX}\nmax-tick-time=180000\nenable-command-block=true" >server.properties
fi

if [ "${INSTALL_ONLY:-false}" = "true" ]; then
    echo "INSTALL_ONLY: complete"
    exit 0
fi

JAVA_VERSION=$("${JAVA_PATH:-java}" -fullversion 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ ! "$JAVA_VERSION" -ge 17 ]; then
    echo "Minecraft 1.19 requires Java 17 - found Java $JAVA_VERSION"
    pause
    exit 1
fi

check_eula() {
    eula=$(tail -1 eula.txt)
    if [ "${eula}" = "eula=false" ]; then
        echo
        echo "You need to agree to the EULA in order to run the server"
        echo "read https://aka.ms/MinecraftEULA"
        echo "Do you want to change the eula=false to eula=true in eula.txt (y/n)? You can do this manually if you prefer."
        read answer
        if [ "$answer" = "y" ]; then
            # replace eula=false with eula=true
            if [[ "$OSTYPE" == "darwin"* ]]; then
                sed -i '' 's/eula=false/eula=true/g' eula.txt
            else
                sed -i 's/eula=false/eula=true/g' eula.txt
            fi
        fi
        check_eula
    fi
}
check_eula 
while true; do
    "${JAVA_PATH:-java}" @libraries/net/minecraftforge/forge/"${MC_VERSION}"-"${FORGE_VERSION}"/unix_args.txt nogui

    if [ "${RESTART:-true}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
