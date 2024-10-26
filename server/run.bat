@echo off
setlocal

set "FORGE_VERSION=43.4.4"
set "MC_VERSION=1.19.2"
set "PACK_NAME=Create: Prepare to Dye"
set "MTD_SUFFIX= - Server"
rem Credit to @jeremiahwinsley for template https://github.com/AllTheMods/atm6-packaging/blob/main/templates/startserver-template-18.sh
set "MIRROR=https://maven.minecraftforge.net/"         rem forge mirror
set "INSTALLER=forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"
set "FORGE_URL=%MIRROR%net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/forge-%MC_VERSION%-%FORGE_VERSION%-installer.jar"

echo + This script can generate, update, and run a server.
echo + When running this script, it will take the relevant data from the modpack folder (parent folder or folder supplied as first argument) into the current folder if they are not already there or if there is an update (version file is different), then it will run the server.

if not defined MODPACK_DIR set "MODPACK_DIR=.."
if not "%~1"=="" set "MODPACK_DIR=%~1"
for %%I in ("%MODPACK_DIR%") do set "MODPACK_PATH=%%~fI"
echo + Modpack folder: %MODPACK_PATH%

if not defined JAVA_PATH set "JAVA_PATH=java"
"%JAVA_PATH%" -version >nul 2>&1
if %errorlevel% neq 0 (
    echo Minecraft %MC_VERSION% requires Java 17 - Java not found. Either update Java, or pass the path to the java.exe with the environment variable JAVA_PATH
    pause
    exit /b 1
)

@echo off

if exist VERSION (
    if exist "%MODPACK_PATH%\VERSION" (
        echo VERSION file found in modpack folder, checking if it is the same as the current version
        echo Comparing VERSION files: VERSION and "%MODPACK_PATH%\VERSION"
        fc /b VERSION "%MODPACK_PATH%\VERSION" >nul
        rem Check if the error level indicates the files are different
        if errorlevel 1 (
            echo Current version is different from the version in the modpack folder, updating
            if exist mods (
                echo Deleting mods directory
                rmdir /s /q mods
            )
            if exist config (
                echo Deleting config directory
                rmdir /s /q config
            )
            if exist kubejs (
                echo Deleting kubejs directory
                rmdir /s /q kubejs
            )
            if exist defaultconfigs (
                echo Deleting defaultconfigs directory
                rmdir /s /q defaultconfigs
            )
            del /q VERSION
        ) else (
            echo VERSION file is the same, no need to update
        )
    ) else (
        echo VERSION file not found in modpack folder: "%MODPACK_PATH%\VERSION"
    )
) else (
    echo VERSION file not found in current directory.
)


if not exist VERSION (
    echo Grabbing game data from modpack folder
    if exist "%MODPACK_PATH%\mods" (
        echo Grabbing mods from modpack folder
        xcopy /e /i /y "%MODPACK_PATH%\mods" mods >nul
    ) else (
        echo Mods directory not found in modpack folder, continuing without mods
    )
    echo Removing client-side mods
    del /q mods\zume* 2>nul
    if exist "%MODPACK_PATH%\config" (
        echo Grabbing config from modpack folder
        xcopy /e /i /y "%MODPACK_PATH%\config" config >nul
    ) else (
        echo Config directory not found in modpack folder, continuing without config
    )
    if exist "%MODPACK_PATH%\kubejs" (
        echo Grabbing kubejs from modpack folder
        xcopy /e /i /y "%MODPACK_PATH%\kubejs" kubejs >nul
    ) else (
        echo KubeJS directory not found in modpack folder, continuing without kubejs
    )
    if exist "%MODPACK_PATH%\defaultconfigs" (
        echo Grabbing defaultconfigs from modpack folder
        xcopy /e /i /y "%MODPACK_PATH%\defaultconfigs" defaultconfigs >nul
    ) else (
        echo Defaultconfigs directory not found in modpack folder, continuing without defaultconfigs
    )
    copy /y "%MODPACK_PATH%\VERSION" VERSION >nul
    if %errorlevel% neq 0 (
        echo Failed to copy VERSION file
    )
)

cd /d "%~dp0"

if not exist "libraries" (
    echo Forge not installed, installing now.
    if not exist %INSTALLER% (
        echo No Forge installer found, downloading from %FORGE_URL%
        @REM bitsadmin.exe /rawreturn /nowrap /transfer forgeinstaller /download /priority FOREGROUND %FORGE_URL% %INSTALLER%
        where curl > null 2>&1
        if %errorlevel% equ 0 (
            curl -o %INSTALLER% -L %FORGE_URL%
        ) else (
            echo curl not found. Crying instead.
            pause
        )
    )
    
    echo Running Forge installer.
    "%JAVA_PATH%" -jar %INSTALLER% -installServer -mirror %MIRROR%
)

if not exist server.properties (
    echo Copying default.server.properties to server.properties
    copy /y default.server.properties server.properties >nul
    if %errorlevel% neq 0 (
        echo Failed to copy default.server.properties, will let Minecraft server generate them on its own
    )
    (
    echo allow-flight=true
    echo motd=%PACK_NAME%%MTD_SUFFIX%
    echo max-tick-time=180000
    echo enable-command-block=true
    )>>server.properties
)

if not defined INSTALL_ONLY set "INSTALL_ONLY=false"
if "%INSTALL_ONLY%"=="true" (
    echo INSTALL_ONLY: complete
    exit /b 0
)

rem Check Java version
"%JAVA_PATH%" -version 2>&1 | findstr /r /c:"\"1[7-9]\." /c:"\"[2-9][0-9]\." >nul
if errorlevel 1 (
    echo Minecraft %MC_VERSION% requires Java 17 or higher.
    "%JAVA_PATH%" -version
    pause
    exit /b 1
)

:check_eula
if not exist eula.txt (
    echo eula.txt not found.
    goto :eula_end
)
set "EULA_FOUND=false"
for /f "usebackq tokens=1* delims==" %%A in ("eula.txt") do (
    if /i "%%A"=="eula" (
        set "EULA_VALUE=%%B"
        set "EULA_FOUND=true"
    )
)
if "%EULA_FOUND%"=="true" (
    if "%EULA_VALUE%"=="false" (
        echo.
        echo You need to agree to the EULA in order to run the server
        echo Read https://aka.ms/MinecraftEULA
        set /p ANSWER="Do you want to change the eula=false to eula=true in eula.txt (y/n)? You can do this manually if you prefer."
        if /i "%ANSWER%"=="y" (
            rem Replace eula=false with eula=true
            (for /f "usebackq delims=" %%L in ("eula.txt") do (
                set "LINE=%%L"
                setlocal enabledelayedexpansion
                if /i "!LINE!"=="eula=false" (
                    echo eula=true>>"eula_new.txt"
                ) else (
                    echo !LINE!>>"eula_new.txt"
                )
                endlocal
            ))
            move /y "eula_new.txt" "eula.txt" >nul
        )
        goto :check_eula
    )
)
:eula_end

if not defined RESTART set "RESTART=true"
:start_server
"%JAVA_PATH%" @libraries/net/minecraftforge/forge/%MC_VERSION%-%FORGE_VERSION%/win_args.txt nogui

if "%RESTART%"=="false" (
    exit /b 0
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10
goto :start_server

endlocal
