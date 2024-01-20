// priority: 100

/*

!WARNING!

This function is known to be broken.
Remove this comment if you fix it

*/

let WailaClientRegistration
let WailaBlockAccessor
if (Platform.isClientEnvironment())
{
  WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
  WailaBlockAccessor = Java.loadClass("snownee.jade.api.BlockAccessor")
}

/**
 * Call within StartupEvents.postInit
 * 
 * @param {String} blockId - The ID of the BlockEntity to which the tooltip will be added.
 * @param {String|String[]} dataField - The name(s) of the data field(s) to display in the tooltip. Can be a single field or an array of fields.
 * @param {Component|Component[]|boolean|null} [prefix=true] - Optional prefix(es) for the tooltip.
 *  - If `true`, automatically appends the data field name and a colon for each field
 *  - Can be a single `Component` or an array of `Component`s to match the `dataField` array.
 * @param {Component|Component[]|null} [suffix] - Optional suffix(es) for the tooltip.
 *  - Can be a single `Component` or an array of `Component`s to match the `dataField` array.
 * @returns {void}
 * 
 * @example
 * // Example 1: Adding a tooltip with default prefix
 * StartupEvents.postInit((event) => {
 *   addJadeTooltipBlockEntityField("ptdye:animation_block", "name", true);
 * });
 * 
 * // Example 2: Adding a tooltip with custom prefix and suffix
 * addJadeTooltipBlockEntityField("ptdye:animation_block",
 *   [ "name", "foo", "bar" ],
 *   [Component.ofString("Name: "), Component.ofString("Example").white(), Component.ofString("Turtle").cyan().underlined()],
 *   Component.ofString(" Magic Points")
 * );
 */
function addJadeTooltipBlockEntityField(blockId, dataField, prefix, suffix) {
  if (!Platform.isClientEnvironment())
    return;
  const emptyComponent = Component.ofString("")
  prefix = prefix ?? true
  if (! Array.isArray(dataField)) {
    prefix = prefix === true
      ? Component.ofString(`${dataField}: `)
      : prefix ? prefix : emptyComponent
    suffix = suffix ? suffix : emptyComponent
  }
  WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
    if (!(accessor instanceof WailaBlockAccessor) || accessor.block.id != blockId)
      return
    tooltip.clear()
    let addToTooltip = component => tooltip["add(net.minecraft.network.chat.Component)"](component)
    /** @type {Internal.BlockEntityJS} */
    const blockEntity = accessor.getBlockEntity()
    if (Array.isArray(dataField)) {
      for (let i = 0; i < dataField.length; i++) {
        const pre = prefix === true
          ? Component.ofString(`${dataField[i]}: `)
          : prefix ? (Array.isArray(prefix) ? Component.of(prefix[i]) : Component.of(prefix)) : emptyComponent
        const suf = suffix ? (Array.isArray(suffix) ? Component.of(suffix[i]) : Component.of(suffix)) : emptyComponent
        addToTooltip(pre.append(blockEntity.data.get(dataField[i]).getAsString()).append(suf))
      }
    } else
      addToTooltip(Component.of(prefix).append(blockEntity.data.getString(dataField)).append(Component.of(suffix)))
  })
}
