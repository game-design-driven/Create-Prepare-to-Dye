@echo off
set FORGE_VERSION="43.3.5"
set MC_VERSION="1.19.2"
set PACK_NAME="Create: Prepare to Dye"
set MTD_SUFFIX=" - Server"
:: Credit to @jeremiahwinsley for template
set MIRROR=https://maven.allthehosting.com/releases/ # atm mirror
set MIRROR=https://maven.minecraftforge.net/ # forge mirror
set INSTALLER="forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"
set FORGE_URL="%MIRROR%net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"

:JAVA
if not defined JAVA_PATH (
    set JAVA_PATH=java
)

"%JAVA_PATH%" -version 1>nul 2>nul || (
   echo Minecraft %MC_VERSION% requires Java 17 - Java not found
   pause
   exit /b 1
)

:FORGE
setlocal
cd /D "%~dp0"
if not exist "libraries" (
    echo Forge not installed, installing now.
    if not exist %INSTALLER% (
        echo No Forge installer found, downloading from %FORGE_URL%
        bitsadmin.exe /rawreturn /nowrap /transfer forgeinstaller /download /priority FOREGROUND %FORGE_URL% %INSTALLER%
    )
    
    echo Running Forge installer.
    "%JAVA_PATH%" -jar %INSTALLER% -installServer -mirror %MIRROR%
)

:MODS
if not exist "mods" (
    echo mods directory not found, trying to copy from parent folder
    if exist "..\mods" (
        echo Copying mods from parent folder
        xcopy /E /I /Y "..\mods" "mods"
    ) else (
        echo Mods directory not found in parent folder, starting server without mods
    )
)

:CONFIG
if not exist "config" (
    echo config directory not found, trying to copy from parent folder
    if exist "..\config" (
        echo Copying config from parent folder
        xcopy /E /I /Y "..\config" "config"
    ) else (
        echo config directory not found in parent folder, starting server without config
    )
)

:KUBEJS
if not exist "kubejs" (
    echo kubejs directory not found, trying to copy from parent folder
    if exist "..\kubejs" (
        echo Copying kubejs from parent folder
        xcopy /E /I /Y "..\kubejs" "kubejs"
    ) else (
        echo kubejs directory not found in parent folder, starting server without KubeJS
    )
)

:DEFAULTCONFIGS
if not exist "defaultconfigs" (
    echo defaultconfigs directory not found, trying to copy from parent folder
    if exist "..\defaultconfigs" (
        echo Copying defaultconfigs from parent folder
        xcopy /E /I /Y "..\defaultconfigs" "defaultconfigs"
    ) else (
        echo defaultconfigs directory not found in parent folder, starting server without defaultconfigs
    )
)

if not exist "server.properties" (
    echo Copying default.server.properties to server.properties
    copy default.server.properties server.properties
)

if "%INSTALL_ONLY%" == "true" (
    echo INSTALL_ONLY: complete
    goto:EOF
)

for /f tokens^=2-5^ delims^=.-_^" %%j in ('"%JAVA_PATH%" -fullversion 2^>^&1') do set "jver=%%j"
if not %jver% geq 17  (
    echo Minecraft %MC_VERSION% requires Java 17 - found Java %jver%
    pause
    exit /b 1
) 

:START
"%JAVA_PATH%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/win_args.txt nogui

if "%RESTART%" == "false" ( 
    goto:EOF 
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10 /nobreak > NUL
goto:START