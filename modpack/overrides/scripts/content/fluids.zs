#loader contenttweaker

import mods.contenttweaker.fluid.FluidBuilder;

//With some other properties
val acid = new FluidBuilder(true, 3250766)
    .density(1600)
    .temperature(400)
    .viscosity(500);
acid.build("acid");

val oil = new FluidBuilder(false, 15589532)
    .density(1000)
    .temperature(300)
    .viscosity(2000);
acid.build("oil");