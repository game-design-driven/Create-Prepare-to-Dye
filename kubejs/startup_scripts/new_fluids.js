// Fluid registrations for Create: Prepare to Dye 2

StartupEvents.registry("fluid", (event) => {
  // Fermented goop
  event
    .create("ptdye:fermented_goop")
    .displayName("Fermented Goop")
    .thickTexture(0xe0c3bc)
    .bucketColor(0xe0c3bc)
    .noBlock();

  // Organic mass
  event
    .create("ptdye:organic_mass")
    .displayName("Organic Mass")
    .thickTexture(0x2db83d)
    .bucketColor(0x2db83d);

  // Flowing milk (fake fluid for display)
  event
    .create("ptdye:flowing_milk")
    .displayName("Flowing Milk")
    .thinTexture(0xe7e7e7)
    .bucketColor(0xe7e7e7)
    .noBucket();

  // Tomato sauce
  event
    .create("ptdye:tomato_sauce")
    .displayName("Tomato Sauce")
    .thickTexture(0xff6347)
    .bucketColor(0xff6347);
});

// Add fluid buckets to creative tabs
StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", (event) => {
  event.add("ptdye:fermented_goop_bucket");
  event.add("ptdye:organic_mass_bucket");
  event.add("ptdye:tomato_sauce_bucket");
});
