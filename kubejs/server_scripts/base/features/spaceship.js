if (feature('Place spaceship structure')) {
	ServerEvents.loaded((event) => {
		if(!event.server.persistentData.crashLanded){
			event.server.persistentData.crashLanded = true;
			event.server.runCommandSilent("place structure minecraft:spaceship_wreck_main");
		}
	})
}