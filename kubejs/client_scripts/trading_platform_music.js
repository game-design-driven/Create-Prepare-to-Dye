const EntityBoundSoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.EntityBoundSoundInstance");
const SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
const Float = Java.loadClass("java.lang.Float");
const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("play_platform_landing_music", event => {
    let entity_uuid = event.getData().getUUID("pilot_entity_uuid");
    let entity = Client.level.getEntityManager().entityGetter.get(entity_uuid)
    playMusic(entity);
})

function playMusic(entity) {
    let sound_instance = EntityBoundSoundInstance(
        SoundEvent(ResourceLocation("ptdye:trading_platform.fanfare")),
        SoundSource.BLOCKS, new Float(10), new Float(1), entity, 0
    );
    Minecraft.getInstance().getSoundManager().play(sound_instance);
}