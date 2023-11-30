const EntityBoundSoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.EntityBoundSoundInstance");
const SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
const Float = Java.loadClass("java.lang.Float");
const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

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
        playMusic(landing);
        landing.last_played_height = landing.main_entity.y;
    }
}

function playMusic(landing) {
    let sound_instance = EntityBoundSoundInstance(
        SoundEvent(ResourceLocation("ptdye:trading_platform.fanfare")),
        SoundSource.BLOCKS, new Float(10), new Float(1), landing.pilot, 0
    );
    Minecraft.getInstance().getSoundManager().play(sound_instance);
}