import json
from pathlib import Path


class AliasCreator:

    def __init__(self):
        self.alias_lang_data = dict()
        self.alias_data = list()

    def create_aliases(self, original_lang_file_path: Path, new_lang_file_path: Path):
        with original_lang_file_path.open() as original_lang_file:
            original_lang_data: dict[str,str] = json.load(original_lang_file)
        with new_lang_file_path.open() as new_lang_file:
            new_lang_data: dict[str,str] = json.load(new_lang_file)

        for key in new_lang_data.keys():
            if not (key.startswith("block") or key.startswith("item")):
                continue
            try:
                original_name = original_lang_data[key]
            except KeyError:
                continue
            alias_key = "alias.emi." + original_name.lower().replace(" ", "_")
            normalized_item_key = key.replace(".", ":").replace("block", "item", 1)
            self.alias_lang_data[alias_key] = original_name
            self.alias_data.append({
                "stacks": normalized_item_key,
                "text": alias_key,
            })

    def save_aliases(self, lang_file_path: Path, alias_file_path: Path):
        with lang_file_path.open("w") as lang_file:
            json.dump(self.alias_lang_data, lang_file, indent=4)
        with alias_file_path.open("w") as alias_file:
            json.dump({"aliases": self.alias_data}, alias_file, indent=4)


if __name__ == '__main__':
    alias_creator = AliasCreator()
    for modname in ["minecraft", "quark", "supplementaries", "easy_villagers", "create", "botania"]:
        alias_creator.create_aliases(Path("original_lang_files") / modname / "en_us.json", Path("../kubejs/assets/") / modname / "lang/en_us.json")

    Path("../kubejs/assets/emi/lang").mkdir(parents=True, exist_ok=True)
    Path("../kubejs/assets/emi/aliases").mkdir(parents=True, exist_ok=True)
    alias_creator.save_aliases(Path("../kubejs/assets/emi/lang/en_us.json"), Path("../kubejs/assets/emi/aliases/renamed_items.json"))
