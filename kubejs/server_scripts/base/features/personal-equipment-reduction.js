if (feature("Remove Cosmetic Botania Trinkets")) {
  removeItems([
    "botania:cosmetic_black_bowtie",
    "botania:cosmetic_black_tie",
    "botania:cosmetic_red_glasses",
    "botania:cosmetic_puffy_scarf",
    "botania:cosmetic_engineer_goggles",
    "botania:cosmetic_eyepatch",
    "botania:cosmetic_wicked_eyepatch",
    "botania:cosmetic_red_ribbons",
    "botania:cosmetic_pink_flower_bud",
    "botania:cosmetic_polka_dotted_bows",
    "botania:cosmetic_blue_butterfly",
    "botania:cosmetic_cat_ears",
    "botania:cosmetic_witch_pin",
    "botania:cosmetic_devil_tail",
    "botania:cosmetic_kamui_eye",
    "botania:cosmetic_googly_eyes",
    "botania:cosmetic_four_leaf_clover",
    "botania:cosmetic_clock_eye",
    "botania:cosmetic_unicorn_horn",
    "botania:cosmetic_devil_horns",
    "botania:cosmetic_hyper_plus",
    "botania:cosmetic_botanist_emblem",
    "botania:cosmetic_ancient_mask",
    "botania:cosmetic_eerie_mask",
    "botania:cosmetic_alien_antenna",
    "botania:cosmetic_anaglyph_glasses",
    "botania:cosmetic_orange_shades",
    "botania:cosmetic_groucho_glasses",
    "botania:cosmetic_thick_eyebrows",
    "botania:cosmetic_lusitanic_shield",
    "botania:cosmetic_tiny_potato_mask",
    "botania:cosmetic_questgiver_mark",
    "botania:cosmetic_thinking_hand",
  ]);
}

if (feature("Remove Botania Brews")) {
  removeItems([
    "botania:brew_vial",
    "botania:brew_flask",
    "botania:incense_stick",
    "botania:blood_pendant",
  ]);
}

if (feature("Remove Botania Personal Improvement Trinkets")) {
  removeItem("botania:blood_pendant");
  removeItems([
    "botania:travel_belt",
    "botania:super_travel_belt",
    "botania:speed_up_belt",
    "botania:knockback_belt",
    "botania:ice_pendant",
    "botania:lava_pendant",
    "botania:super_lava_pendant",
    "botania:cloud_pendant",
    "botania:super_cloud_pendant",
    "botania:swap_ring",
    "botania:dodge_ring",
    "botania:mining_ring",
    "botania:pixie_ring",
    "botania:reach_ring",
    "botania:water_ring",
    "botania:magnet_ring",
    "botania:magnet_ring_greater",
    "botania:aura_ring",
    "botania:aura_ring_greater",
    "botania:mana_ring",
    "botania:mana_ring_greater",
    "botania:flight_tiara",
    "botania:itemfinder",
    "botania:diva_charm",
    "botania:goddess_charm",
    "botania:tiny_planet",
    "botania:invisibility_cloak",
    "botania:balance_cloak",
    "botania:unholy_cloak",
    "botania:holy_cloak",
    "botania:third_eye",
  ]);
}

if (feature("Remove Relics")) {
  removeItems([
    "botania:king_key",
    "botania:infinite_fruit",
    "botania:dice",
    "botania:loki_ring",
    "botania:odin_ring",
    "botania:thor_ring",
    "botania:flugel_eye",
  ]);
}

// unused, kept here just in case so you don't have to grab it out of from in-game later
// let allowed_rods = [
//   "botania:dirt_rod",
//   "botania:tornado_rod",
//   "botania:rainbow_rod",
// ];

if (feature("Remove Non-Useful Rods")) {
  removeItems([
    "botania:missile_rod",
    "botania:cobble_rod",
    "botania:water_rod",
    "botania:fire_rod",
    "botania:divining_rod",
    "botania:smelt_rod",
    "botania:exchange_rod",
    "botania:gravity_rod",
    "botania:skydirt_rod",
    "botania:terraform_rod",
  ]);
}

if (feature("Disable Manual Rods")) {
  BlockEvents.rightClicked((event) => {
    if (!event.item.hasTag("botania:rods")) return true;
    let block = event.block;
    let player = event.player;

    if (block.id == "botania:avatar") {
      event.server.runCommandSilent(
        `playsound minecraft:entity.glow_item_frame.add_item block @a ${block.x} ${block.y} ${block.z}`
      );
      return true;
    }

    event.server.runCommandSilent(
      `playsound minecraft:block.fire.extinguish block @a ${player.x} ${player.y} ${player.z}`
    );
    event.server.runCommandSilent(
      `title ${player.name.string} actionbar ${Text.of(
        "Your metallic grips can't even get a spark..."
      )
        .red()
        .toJson()}`
    );
    player.addItemCooldown(event.item, 20);
    return false;
  });
}

if (feature("Remove Misc. Botania Tools")) {
  removeItems([
    "botania:phantom_ink",
    "botania:ender_hand",
    "botania:thorn_chakram",
    "botania:spawner_mover",
    "botania:terra_pick",
    "botania:glass_pickaxe",
    "botania:terra_axe",
    "botania:terra_sword",
    "botania:star_sword",
    "botania:thunder_sword",
    "botania:ender_dagger",
    "botania:crystal_bow",
    "botania:slime_bottle",
    "botania:astrolabe",
    "botania:bauble_box",
    "botania:clip",
    "botania:mana_gun",
    "botania:dreamwood_wand",
    "botania:slingshot",
    "botania:vine_ball",
    "botania:world_seed",
    "botania:phantom_ink",
    "botania:ender_hand",
    "botania:black_hole_talisman",
    "botania:temperance_stone",
    "botania:thorn_chakram",
    "botania:flare_chakram",
    "botania:spawner_mover",
  ]);
}
