const CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");

const LANDING_MUSIC_LENGTH = 44;
const BLOCKS_PER_MUSIC_CYCLE = LANDING_MUSIC_LENGTH * 2;
const LANDING_MUSIC_OFFSET = -7 + BLOCKS_PER_MUSIC_CYCLE;

function playMusicAccordingToHeight(landing) {
    if (landing.last_played_height != null && landing.last_played_height - landing.main_entity.y < 2) {
        return;
    }
    let remaining_height = landing.main_entity.y - landing.main_entity.persistentData.getShort("floor_level");
    let offset = remaining_height % BLOCKS_PER_MUSIC_CYCLE;
    if (Math.abs(offset - LANDING_MUSIC_OFFSET) < 0.2) {
        playMusicForAllPlayers(landing);
        landing.last_played_height = landing.main_entity.y;
    }
}

function playMusicForAllPlayers(landing) {
    Utils.server.players.forEach(player => {
        let data = CompoundTag();
        data.putUUID("pilot_entity_uuid", landing.pilot.uuid);
        player.sendData("play_platform_landing_music", data);
    })
}
