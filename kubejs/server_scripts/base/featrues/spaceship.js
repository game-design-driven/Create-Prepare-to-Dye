if (feature('Place spaceship structure')) {
	PlayerEvents.loggedIn((event) => {
		if(!event.server.persistentData.crashLanded)
			event.server.persistentData.crashLanded = true;
			event.server.commandSenderWorld.runCommandSilent("place structure minecraft:spaceship_wreck_main");
	})
}