ItemEvents.modification((event) => {
  const tools = [
    /.*_sword$/,
    /.*_shovel$/,
    /.*_pickaxe$/,
    /.*_axe$/,
    /.*_hoe$/,
  ];
  const armor =[
    /.*_helmet$/,
    /.*_chestplate$/,
    /.*_leggings$/,
    /.*_boots$/,
  ]

  tools.forEach((tool) => {
    event.modify(tool, (item) => {
        item.setMaxStackSize(16)
    });
  });
});
