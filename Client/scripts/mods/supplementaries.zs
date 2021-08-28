import crafttweaker.api.util.text.MCStyle;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.text.TextFormatting;

<item:supplementaries:cog_block>.remove();


// <item:minecraft:apple>.modifyTooltip((stack, tooltip, advanced) => {
//     tooltip[0] = (tooltip[0].formattedText as MCTextComponent).setStyle(tooltip[0].getStyle().setColor(<formatting:red>));
// });

<item:minecraft:apple>.modifyTooltip((stack, tooltip, advanced) => {
  tooltip.add(
      ("important " as MCTextComponent).setStyle(
          new MCStyle().setColor(<formatting:red>)
        ).appendSibling((
            " than others" as MCTextComponent).setStyle(
                new MCStyle().setColor(<formatting:green>)
            )
        )
    );
});
<item:supplementaries:jar>.addTooltip(("important " as MCTextComponent).setStyle(
          new MCStyle().setColor(<formatting:red>)
        ));

// "Some things are "+"more important".red()+" than others" <- this is how I want this to work