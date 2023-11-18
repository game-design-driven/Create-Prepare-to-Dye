ItemEvents.modification((event) => {
  const tools = [
    /minecraft:.*_sword/,
    /minecraft:.*_shovel/,
    /minecraft:.*_pickaxe/,
    /minecraft:.*_axe/,
    /minecraft:.*_hoe/,
  ];

  tools.forEach((tool) => {
    event.modify(tool, (item) => {
        item.setMaxStackSize(16)
    });
  });
});
