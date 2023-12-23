const $CreateClient = Java.loadClass("com.simibubi.create.CreateClient");
const $AABB = Java.loadClass("net.minecraft.world.phys.AABB");
const $PonderPalette = Java.loadClass("com.simibubi.create.foundation.ponder.PonderPalette");

const COLORS = {
    "blocked": $PonderPalette.RED,
    "platform_nearby": $PonderPalette.RED,
    "ok": $PonderPalette.WHITE,
}

const MESSAGES = {
    "blocked": "status.ptdye.trading_platform.blocked",
    "platform_nearby": "status.ptdye.trading_platform.platform_nearby",
    "ok": "status.ptdye.trading_platform.landing_spot_ok",
}

let current_preview_state = null;

ClientEvents.tick(event => {
    if (event.player.mainHandItem.id == "ptdye:trading_transceiver" || event.player.offhandItem.id == "ptdye:trading_transceiver") {
        if (current_preview_state == null) {
            return;
        }

        let target_block = event.player.rayTrace(30, false).block;
        if (target_block == null) {
            return;
        }

        let color = COLORS[current_preview_state];

        let box = $AABB(target_block.x - 1, target_block.y + 1, target_block.z - 1, target_block.x + 2, target_block.y + 8.5, target_block.z + 2);
        $CreateClient.OUTLINER.showAABB("trading_platform_location_marker", box).colored(color.getColor());

        let message = MESSAGES[current_preview_state];

        event.player.setStatusMessage(Text.translate(message).color(Color.of(color.getColor())));
    }
    else {
        current_preview_state = null;
    }
});

NetworkEvents.dataReceived("landing_spot_preview_stage_change", event => {
    current_preview_state = event.getData().getString("state");
});