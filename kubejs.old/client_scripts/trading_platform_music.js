NetworkEvents.dataReceived("play_platform_landing_music", event => {
    let entity_uuid = event.getData().getUUID("pilot_entity_uuid");
    let entity = Client.level.getEntityManager().entityGetter.get(entity_uuid)
    playMusic(entity);
})

function playMusic(entity) {
    let sound_instance = global.minecraft.EntityBoundSoundInstance(
        global.minecraft.SoundEvent(ResourceLocation("ptdye:trading_platform.fanfare")),
        global.minecraft.SoundSource.BLOCKS, new global.java.Float(10), new global.java.Float(1), entity, 0
    );
    global.minecraft.MINECRAFT.getInstance().getSoundManager().play(sound_instance);
}