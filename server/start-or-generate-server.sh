#!/bin/sh
set -eu
FORGE_VERSION="43.3.5"
MC_VERSION="1.19.2"
PACK_NAME="Create: Prepare to Dye"
MTD_SUFFIX=" - Server"
# Credit to @jeremiahwinsley for template https://github.com/AllTheMods/atm6-packaging/blob/main/templates/startserver-template-18.sh
# To use a specific Java runtime, set an environment variable named ATM7_JAVA to the full path of java.exe.
# To disable automatic restarts, set an environment variable named ATM7_RESTART to false.
# To install the pack without starting the server, set an environment variable named ATM7_INSTALL_ONLY to true.
MIRROR="https://maven.allthehosting.com/releases/" # atm mirror
MIRROR="https://maven.minecraftforge.net/" # forge mirror
INSTALLER="forge-${MC_VERSION}-${FORGE_VERSION}-installer.jar"
FORGE_URL="${MIRROR}net/minecraftforge/forge/${MC_VERSION}-${FORGE_VERSION}/forge-${MC_VERSION}-${FORGE_VERSION}-installer.jar"

pause() {
    printf "%s\n" "Press enter to continue..."
    read ans
}

if ! command -v "${JAVA_PATH:-java}" >/dev/null 2>&1; then
    echo "Minecraft 1.19 requires Java 17 - Java not found. Either update java, or pass the path to the java.exe with the environment variable JAVA_PATH"
    pause
    exit 1
fi

if [ ! -d mods ]; then
    echo "mods directory not found, trying to copy from parent folder"
    if [ -d ../mods ]; then
        echo "Copying mods from parent folder"
        cp -r ../mods .
    else
        echo "Mods directory not found in parent folder, starting server without mods"
    fi
fi

if [ ! -d config ]; then
    echo "config directory not found, trying to copy from parent folder"
    if [ -d ../config ]; then
        echo "Copying config from parent folder"
        cp -r ../config .
    else
        echo "config directory not found in parent folder, starting server without config"
    fi
fi

if [ ! -d kubejs ]; then
    echo "kubejs directory not found, trying to copy from parent folder"
    if [ -d ../kubejs ]; then
        echo "Copying kubejs from parent folder"
        cp -r ../kubejs .
    else
        echo "kubejs directory not found in parent folder, starting server without KubeJS"
    fi
fi

if [ ! -d defaultconfigs ]; then
    echo "defaultconfigs directory not found, trying to copy from parent folder"
    if [ -d ../defaultconfigs ]; then
        echo "Copying defaultconfigs from parent folder"
        cp -r ../defaultconfigs .
    else
        echo "defaultconfigs directory not found in parent folder, starting server without defaultconfigs"
    fi
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
    $(cat default.server.properties > server.properties) || echo "Failed to copy default.server.properties, will let minecraft server generate them on it's own"
    printf "allow-flight=true\nmotd=${PACK_NAME}${MTD_SUFFIX}\nmax-tick-time=180000\nenable-command-block=true" > server.properties
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

while true
do
    "${JAVA_PATH:-java}" @libraries/net/minecraftforge/forge/${MC_VERSION}-${FORGE_VERSION}/unix_args.txt nogui

    if [ "${RESTART:-true}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
