// priority: 100

function addTooltip(stack, tooltip) {
  if (stack === "minecraft:air") return;
  //if list
  if (Array.isArray(stack)) {
    stack.forEach((element) => {
      addTooltip(element, tooltip);
    });
  } else {
    global.itemTooltips.push([stack, tooltip]);
  }
}
