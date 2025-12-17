- Adding translations can be done by adding lang files (`[lang].json`) to the `[namespace]/lang` folder under `kubejs/assets`, and populating their entries, for example:
    ```
    kubejs/assets/minecraft/lang/en_us.json
    kubejs/assets/minecraft/lang/zh_cn.json
    kubejs/assets/ae2/lang/en_us.json
    kubejs/assets/ae2/lang/zh_cn.json
    ```
    example of file content:
    `kubejs/assets/ae2/lang/zh_cn.json`
    ```json
    {
        "item.ae2.storage_bus": "存储总线"
    }
    ```



- Each supported language in `supported_langs.json` will generate a `missing_translations/lang.missing.json` file that lists all missing translations for that language, as you add new translations that file will be updated (make sure to reload resources with f3+t). 
    example of entry in file:
    `kubejs/translation_tools/missing_translations/zh_cn.missing.json`
    ```json
    {
        "ae2": {
            "item.ae2.storage_bus": "Storage Bus"
        }
    }
    ```
    this entry will disappear from the file once the translation is added like so:
    `kubejs/assets/ae2/lang/zh_cn.json`
    ```json
    {
        "item.ae2.storage_bus": "存储总线"
    }
    ```
    (and once resources are reloaded with f3+t)
- Note that there are a lot of items and blocks that are removed from the game but those will still show up in the missing translations file
- If you are making translations, consider making a pr on our github to add them to the modpack so everyone can benefit from them
