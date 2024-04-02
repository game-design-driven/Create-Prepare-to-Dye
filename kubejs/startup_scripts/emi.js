// // const $TEAM_EVENTS = Java.loadClass('dev.ftb.mods.ftbteams.event.TeamEvent');
// // const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
// // const $FTBChunks = Java.loadClass('dev.ftb.mods.ftbchunks.FTBChunks')
// // const $BooleanProperty = Java.loadClass('dev.ftb.mods.ftbteams.property.BooleanProperty')
// // const $FTBTeamsAPI = Java.loadClass('dev.ftb.mods.ftbteams.FTBTeamsAPI')

// const $EmiRegistery = Java.loadClass('dev.emi.emi.api.EmiRegistry')
// ArchEvents.registry(event => {
//     event.register('EmiRegistry', $TEAM_EVENTS, 'CREATED');
//     event.register('ClientRawInputEvent.MouseScrolled', CLIENTRAWINPUTEVENT, 'MOUSE_SCROLLED');
//     console.log("ClientRawInputEvent.MouseScrolled has been registered…");
// });
// ArchEvents.handleStartup('dev.emi.emi.api.EmiRegistry', e => {
//     e.
// });


// ArchEvents.handle('ftb.teams.created', e => {
//     console.log("FTB Team Created…");
//     console.log(e);
//     let event = e.args[0];
//     let team = event.team;
//     let creator = event.creator;
//     console.log("Team: " + team);
//     console.log("Creator: " + creator);
//     let property = $BooleanProperty(new $ResourceLocation($FTBChunks.MOD_ID, "allow_fake_players"), true)
//     team.setProperty(property, true)
// });