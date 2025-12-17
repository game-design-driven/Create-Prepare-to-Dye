if (feature('Tomato Sauce')) {
    StartupEvents.registry("fluid", (event) => {
        event
          .create("ptdye:tomato_sauce")
          .thickTexture(0xFF6347)
          .bucketColor(0xFF6347);
      });
      
}