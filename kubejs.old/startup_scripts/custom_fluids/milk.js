//fake flowing milk

StartupEvents.registry("fluid", (event) => {
    event
      .create("ptdye:flowing_milk")
      .thinTexture(0xE7E7E7)
      .noBucket()
      .bucketColor(0xE7E7E7);
  });
