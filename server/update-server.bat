:MODS
if exist "mods" (
    echo deleting mods directory
    @RD /S /Q "mods"
) else (
    echo mods directory not found 
)

:MODS
if exist "config" (
    echo deleting config directory
    @RD /S /Q "config"
) else (
    echo config directory not found 
)

:MODS
if exist "kubejs" (
    echo deleting kubejs directory
    @RD /S /Q "kubejs"
) else (
    echo kubejs directory not found 
)

:MODS
if exist "defaultconfigs" (
    echo deleting defaultconfigs directory
    @RD /S /Q "defaultconfigs"
) else (
    echo defaultconfigs directory not found 
)

:MODS
if not exist "mods" (
    if exist "..\mods" (
        echo copying mods from parent folder
        xcopy /E /I /Y "..\mods" "mods"
    ) else (
        echo Mods directory not found in parent folder, starting server without mods
    )
)

:CONFIG
if not exist "config" (
    if exist "..\config" (
        echo copying config from parent folder
        xcopy /E /I /Y "..\config" "config"
    ) else (
        echo config directory not found in parent folder, starting server without config
    )
)

:KUBEJS
if not exist "kubejs" (
    if exist "..\kubejs" (
        echo copying kubejs from parent folder
        xcopy /E /I /Y "..\kubejs" "kubejs"
    ) else (
        echo kubejs directory not found in parent folder, starting server without KubeJS
    )
)

:DEFAULTCONFIGS
if not exist "defaultconfigs" (
    if exist "..\defaultconfigs" (
        echo copying defaultconfigs from parent folder
        xcopy /E /I /Y "..\defaultconfigs" "defaultconfigs"
    ) else (
        echo defaultconfigs directory not found in parent folder, starting server without defaultconfigs
    )
)