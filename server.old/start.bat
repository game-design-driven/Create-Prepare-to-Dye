@echo off
setlocal

rem Configuration Variables
set "FORGE_VERSION=43.4.4"
set "MC_VERSION=1.19.2"
set "PACK_NAME=Create: Prepare to Dye"
set "MTD_SUFFIX= - Server"
set "MIRROR=https://maven.minecraftforge.net/"
set "INSTALLER=forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"
set "FORGE_URL=%MIRROR%net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"
set "MODPACK_DIR=%~1"
if not defined MODPACK_DIR set "MODPACK_DIR=.."
for %%I in ("%MODPACK_DIR%") do set "MODPACK_PATH=%%~fI"

echo + This script can generate, update, and run a server.
echo + Modpack folder: %MODPACK_PATH%

rem Java Version Check
if not defined JAVA_PATH set "JAVA_PATH=java"
"%JAVA_PATH%" -version 2>&1 | findstr /r /c:"\"1[7-9]\." /c:"\"[2-9][0-9]\." >nul
if errorlevel 1 (
    echo Minecraft %MC_VERSION% requires Java 17 or higher.
    "%JAVA_PATH%" -version
    pause
    exit /b 1
)

rem Version Check and Update
if exist VERSION (
    if exist "%MODPACK_PATH%\VERSION" (
        fc /b VERSION "%MODPACK_PATH%\VERSION" >nul
        if errorlevel 1 (
            echo Modpack version has changed, updating server files.
            for %%D in (mods config kubejs defaultconfigs) do (
                if exist "%%D" (
                    echo Deleting %%D directory
                    rmdir /s /q "%%D"
                )
            )
            del /q VERSION
        ) else (
            echo Modpack version is up to date.
        )
    ) else (
        echo VERSION file not found in modpack folder.
    )
) else (
    echo VERSION file not found in current directory.
)

rem Copy Necessary Directories
echo Grabbing relevant game data from modpack folder
for %%D in (mods config kubejs defaultconfigs) do (
    if not exist "%%D" (
        if exist "%MODPACK_PATH%\%%D" (
            echo Copying %%D from modpack folder
            xcopy /e /i /y "%MODPACK_PATH%\%%D" "%%D" >nul
        ) else (
            echo %%D directory not found in modpack folder.
        )
    )
)
echo Removing client-side mods
del /q mods\zume* 2>nul

if not exist VERSION (
    copy /y "%MODPACK_PATH%\VERSION" VERSION >nul
)

rem Install Forge if Necessary
if not exist "libraries" (
    echo Forge not installed, installing now.
    if not exist "%INSTALLER%" (
        echo Downloading Forge installer...
        if exist "%SystemRoot%\System32\curl.exe" (
            curl -o "%INSTALLER%" -L "%FORGE_URL%"
        ) else (
            echo curl not found. Cannot download Forge installer.
            pause
            exit /b 1
        )
    )
    echo Running Forge installer.
    "%JAVA_PATH%" -jar "%INSTALLER%" --installServer
    del run.sh run.bat >nul 2>&1
)

rem Setup Server Properties
if not exist server.properties (
    echo Setting up server.properties
    (
        echo allow-flight=true
        echo motd=%PACK_NAME%%MTD_SUFFIX%
        echo max-tick-time=180000
        echo enable-command-block=true
    )>server.properties
)

rem EULA Agreement
if not exist eula.txt (
    echo eula=true>eula.txt
) else (
    findstr /i "eula=false" eula.txt >nul
    if not errorlevel 1 (
        echo You need to agree to the EULA to run the server.
        echo Read https://aka.ms/MinecraftEULA
        set /p ANSWER="Do you agree to the EULA? (y/n): "
        if /i "%ANSWER%"=="y" (
            (echo eula=true)>eula.txt
        ) else (
            echo You must agree to the EULA to continue.
            exit /b 1
        )
    )
)

rem Start the Server
if /i "%INSTALL_ONLY%"=="true" (
    echo Installation complete.
    exit /b 0
)

set "RESTART=true"
:START_SERVER
echo Starting the server...
"%JAVA_PATH%" @libraries/net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/win_args.txt nogui

if /i "%RESTART%"=="false" (
    exit /b 0
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10 >nul
goto :START_SERVER

endlocal
