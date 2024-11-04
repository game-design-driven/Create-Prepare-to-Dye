// priority: -20

global.predicates = {}

/**
 *
 * @param {Internal.ItemStack} stack
 * @returns
 */
global.predicates.waresPredicate = function (stack) {
  if(!stack.nbt) return 0 
  return stack.nbt.ordered ? 0 : 1
};

//by @reveter from the kubejs discord
StartupEvents.postInit((event) => {
  console.log("= predicate");
  if (!Platform.isClientEnvironment) return;
  const $ItemProperties = Java.loadClass(
    "net.minecraft.client.renderer.item.ItemProperties"
  );
  console.log("= got class");
  console.log($ItemProperties);

  $ItemProperties.register(
    Item.of("wares:delivery_agreement"),
    new ResourceLocation("count"),
    (stack, world, living, seed) => {
      if(!global.predicates.waresPredicate) return 0;
      return global.predicates.waresPredicate(stack);
    }
  );
});
