// import scripts.settings;
import mods.jei.JEI;
import crafttweaker.api.item.ItemStack;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.item.IIngredient;

//.withTag({Unbreakable: 1 as byte, display: {Name: "{\"text\":\"no italics!\",\"italic\":\"false\"}" as string}}) this renames without italics

// <item:minecraft:apple>.modifyTooltip((stack, tooltip, advanced) => {
//     tooltip[0] = (tooltip[0].formattedText as MCTextComponent).setStyle(tooltip[0].getStyle().setColor(<formatting:red>));
// });

// <item:minecraft:apple>.modifyTooltip((stack, tooltip, advanced) => {
//   tooltip.add(
//       ("important " as MCTextComponent).setStyle(
//           new MCStyle().setColor(<formatting:red>)
//         ).appendSibling((
//             " than others" as MCTextComponent).setStyle(
//                 new MCStyle().setColor(<formatting:green>)
//             )
//         )
//     );
// });
// <item:supplementaries:jar>.addTooltip(("important " as MCTextComponent).setStyle(
//           new MCStyle().setColor(<formatting:red>)
//         ));

// "Some things are "+"more important".red()+" than others" <- this is how I want this to work