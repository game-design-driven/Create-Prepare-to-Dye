# KubeJS Script Conversion TODO

Converting old scripts from `kubejs.old/` to the new standard approach.

## Server Scripts

### Features (`kubejs.old/server_scripts/base/features/`)
- [ ] barrel.js -- not needed, we are keeping quar crate for now
- [x] botania-deflowered.js -> botania_deflowered.js (complete conversion)
- [x] botania-runes-detiered.js -> botania.js (all 16 runes detiered)
- [x] bulkrecycle-command.js -> bulkrecycle.js
- [x] chickenEggs.js -> chicken_eggs.js
- [x] cooking.js -> mixing.js, sequenced_assembly.js, pressing.js (already ported)
- [x] crafty-crate-tweaks.js -> recipe_removals.js
- [ ] createDiselGenerators.js
- [ ] deadPlanet.js
- [ ] developerCommands.js
- [x] diamondToolsSilkTouch.js -> block_tweaks.js
- [x] disable_saplings.js -> recipe_removals.js
- [ ] dye.js
- [ ] convert fuel in diesel generator recipes to new version
- [ ] enchantments.js
- [x] food.js -> sequenced_assembly.js (already ported)
- [ ] hammer.js
- [x] handInteractions.js -> player_tweaks.js (bucket filling for diesel engine/spout)
- [x] immovable.js -> tags.js
- [ ] indestructible.js
- [x] ingotReplacement.js -> tags.js (iron/brass tag replacements)
- [x] items.js (empty file)
- [x] manapool.js -> manapool.js (alchemy->blaze burner, single crafting->mana pool)
- [x] milk.js -> tags.js (milk fluid/block tags), TODO: milk cooldown behavior
- [ ] mill_crush.js
- [ ] monsterFertilizer.js
- [x] noWaterCheat.js -> block_tweaks.js
- [x] oresAndIngots.js -> tags.js (brass=gold tags)
- [ ] personal-equipment-reduction.js
- [ ] petBetsy.js
- [x] potions.js -> potions.js (dynamic filling recipes for all potions, brewing stand hidden)
- [x] powders.js -> mixing.js (already ported)
- [x] quartzAutomation.js -> filling.js (already ported)
- [x] recycling.js -> crushing.js (already ported)
- [x] remove-wooden-tools.js -> recipe_removals.js
- [x] schematicannonFuelless.js -> block_tweaks.js
- [x] spaceship.js -> block_tweaks.js
- [x] statusEffects.js -> player_tweaks.js (player invincibility)
- [ ] tools.js
- [ ] trains.js
- [x] trees.js -> split into milling.js, crushing.js, cutting.js, smelting.js, crafting.js (searchable via "TREES -" comments)
- [x] variants.js (variantList.js, variants.js, varient.js) -> variants.js, variant_auto_assemble.js
- [x] villagers.js -> recipe_removals.js, botania.js
- [x] wood.js -> wood.js (log->wood mana infusion), item_application.js (stripping already done)
- [x] wrenchDoesMore.js -> tags.js (wrench_pickup block tag)

### Mod Integrations (`kubejs.old/server_scripts/base/mods/`)
- [x] appliedEnergistics.js -> ae2.js (item hiding), tags.js (quartz/lightblue), crushing.js, splashing.js, item_application.js, crafting.js, smelting.js, filling.js, mixing.js, sequenced_assembly.js, botania.js, variants.js
- [ ] craftingOnAStick.js
- [x] create.js -> tags.js (blaze_burner_capturable entity tag), TODO: recipes
- [x] createEnchantmentIndustry.js -> recipe_removals.js, tags.js (experience rotor removed/hidden)
- [x] minecraft.js -> tags.js (squeezables tags), TODO: recipes
- [x] quark.js -> quark.js (item hiding only), recipes split to smelting.js, crafting.js, variants.js (searchable via "QUARK -")
- [x] railways.js -> tags.js (zinc_nuggets fix), TODO: recipe removals
- [ ] salt.js -- skipped, mod not planned
- [ ] storageDrawers.js
- [ ] supplementaries.js
- [ ] wands.js -- skipped, mod not planned
- [ ] wares.js

### Trading System (`kubejs.old/server_scripts/base/trading/`)
- [ ] backwardsCompatEngine.js
- [ ] landingTradeIntroLine.js
- [ ] platform/animate.js
- [ ] platform/music.js
- [ ] platform/pilot_names.js
- [ ] platform/spawn.js
- [ ] postage_stamp.js
- [ ] trad_related_recipes/trade_recipes.js

### Animation System (`kubejs.old/server_scripts/base/animation/`)
- [ ] animation_anchor.js
- [ ] animation_block.js
- [ ] animation_helper.js
- [ ] commands.js

### Other Server Scripts
- [x] tags.js -> tags.js (consolidated all tag additions from feature/mod scripts)

## Startup Scripts (`kubejs.old/startup_scripts/`)
- [ ] blockCustomizations.js
- [ ] blocks.js
- [ ] conversions.js
- [ ] custom_blocks/ (folder)
- [ ] custom_fluids/ (folder)
- [ ] custom_items/ (folder)
- [ ] destroySpeedAndLevel.js
- [ ] emi.js
- [ ] indestructible.js
- [ ] jade.js
- [ ] ponderDisplayItems.js
- [ ] predicates.js
- [ ] spoutsFillCauldrons.js
- [ ] spoutsFillEnergyCells.js
- [ ] spoutsGrowQuartzBuds.js
- [ ] stacksizes.js
- [ ] trading.js
- [ ] worldgen.js

## Client Scripts (`kubejs.old/client_scripts/`)
- [ ] animation_anchor.js
- [ ] customPonderIndexButton.js
- [ ] foodTooltips.js
- [x] handInteractions.js -> player_tweaks.js (server-side handles it)
- [ ] jei.js
- [ ] lang.helpers.js
- [ ] lang.js
- [ ] milkNerf.js
- [ ] modpack_utils.js
- [ ] noWaterCheat.js
- [ ] ponders/ (folder - 3 files)
- [ ] tooltips/ (folder - 10+ files)
- [ ] tradeShow.js
- [ ] tradeTooltips.js
- [ ] trading_platform_music.js
- [ ] trading_platform_preview.js

## Already Converted
- [x] crushing.js
- [x] milling.js
- [x] cutting.js
- [x] splashing.js
- [x] deploying.js
- [x] item_application.js
- [x] recipe_removals.js
- [x] sandpaper_polishing.js
- [x] pressing.js
- [x] smelting.js
- [x] filling.js
- [x] compacting.js
- [x] mixing.js
- [x] crafting.js
- [x] sequenced_assembly.js
- [x] advjs_server.js / advjs_startup.js
- [x] lychee.js
- [x] botania.js
- [x] stonecutting.js -> variants.js
- [x] devices.js
- [x] loot.js
- [x] gamerules.js
- [x] playerLogin.js
- [x] tooltip_data.js (deleted - client computes directly)
- [x] new_items.js
- [x] new_blocks.js
- [x] new_fluids.js
- [x] client_scripts/tooltips.js
- [x] automaticAssembly.js (variant_auto_assemble.js + varient.js)
- [x] tags.js (consolidated from tags.js, immovable.js, wrenchDoesMore.js, botania-deflowered.js, ingotReplacement.js, oresAndIngots.js, milk.js, appliedEnergistics.js, create.js, minecraft.js, railways.js)
- [x] ae2.js (item hiding from appliedEnergistics.js)
- [x] block_tweaks.js (diamondToolsSilkTouch, schematicannonFuelless, noWaterCheat, spaceship)
- [x] player_tweaks.js (statusEffects - player invincibility)
- [x] bulkrecycle.js
- [x] chicken_eggs.js
