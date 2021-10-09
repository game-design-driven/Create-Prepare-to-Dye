if (global.feature('remove gate crafting')) {
    removeRecipe({ type: "morered:gatecrafting" })
    removeItem("morered:gatecrafting_plinth")

}

if (global.feature('remove red alloy ingot')) {
    removeAndReplace("morered:red_alloy_ingot", "#forge:ingots/copper")
    removeAndReplace("#forge:ingots/redstone_alloy", "#forge:ingots/copper")
    removeRecipe({ output: "morered:red_alloy_wire" })
    addShaped("8x morered:red_alloy_wire", ['aaa'], { a: "#forge:ingots/copper" })
}

