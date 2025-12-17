const BUILD_HEIGHT = 319

global.landing_sequence = {};
global.landing_sequence.LANDING_STAGE = 0;
global.landing_sequence.WAITING_STAGE = 1;
global.landing_sequence.OPENING_STAGE = 2;
global.landing_sequence.FINISHED_STAGE = 3;

global.active_landings = [];

if (feature("Trading platforms")) {
    EntityEvents.spawned(event => {
        if (!event.entity.persistentData.getBoolean("is_landing_sequence_entity")) {
            return;
        }
        let component = event.entity.persistentData.getString("landing_sequence_component");
        if (component === "main_entity") {
            global.active_landings.push({
                main_entity: event.entity,
                base_contraption: getEntityByUUID(event.server, event.entity.persistentData.getUUID("base_contraption")),
                roof_contraption: getEntityByUUID(event.server, event.entity.persistentData.getUUID("roof_contraption")),
                pilot: getEntityByUUID(event.server, event.entity.persistentData.getUUID("pilot")),
                last_played_height: null,
            });
        }
        else {
            let main_entity_uuid = event.entity.persistentData.getUUID("main_entity");
            global.active_landings.forEach(landing => {
                if (landing.main_entity.uuid.compareTo(main_entity_uuid) === 0) {
                    landing[component] = event.entity;
                }
                return;
            });
        }
        
    });

    ServerEvents.tick(event => {
        if (event.server.playerCount === 0) {
            return;
        }
        global.active_landings.forEach(landing => {
            let stage = landing.main_entity.persistentData.getByte("stage");
            if (stage === global.landing_sequence.LANDING_STAGE) {
                performLandingStage(landing, event.server.getOverworld());
            }
            else if (stage === global.landing_sequence.WAITING_STAGE) {
                performWaitingStage(landing);
            }
            else if (stage === global.landing_sequence.OPENING_STAGE) {
                performOpeningStage(landing);
            }
            playMusicAccordingToHeight(landing);
        })
        global.active_landings = global.active_landings.filter(landing => {
            return landing.main_entity.persistentData.getByte("stage") != global.landing_sequence.FINISHED_STAGE;
        })
    });
}

function getEntityByUUID(server, uuid) {
    server.entities.forEach(entity => {
        if (entity.uuid.compareTo(uuid)) {
            return entity;
        }
    });
    return null;
}

function performLandingStage(landing, level) {
    landing.main_entity.setY(landing.main_entity.getY() - 0.2);
    if (landing.main_entity.getY() >= BUILD_HEIGHT - 6) {
        clear_path_for_landing(landing.main_entity, level);
    }
    if (check_floor_for_entity(landing.main_entity, level)) {
        landing.main_entity.persistentData.putByte("stage", global.landing_sequence.WAITING_STAGE);
        landing.pilot.unRide();
        landing.base_contraption.unRide();

        removeFire(landing.main_entity, level);
    }
}

function performWaitingStage(landing) {
    let tick_counter = landing.main_entity.persistentData.getByte("tick_counter");
    tick_counter++;
    if (tick_counter == 20) {
        landing.main_entity.persistentData.putByte("stage", global.landing_sequence.OPENING_STAGE);
        landing.main_entity.persistentData.putByte("tick_counter", 0);
    }
    else {
        landing.main_entity.persistentData.putByte("tick_counter", tick_counter);
    }
}

function performOpeningStage(landing) {
    let tick_counter = landing.main_entity.persistentData.getByte("tick_counter");
    tick_counter++;
    landing.main_entity.setY(landing.main_entity.getY() + 0.15);
    if (tick_counter == 20) {
        landing.main_entity.kill();

        landing.pilot.persistentData.remove("is_landing_sequence_entity");
        landing.pilot.persistentData.remove("landing_sequence_component");
        landing.pilot.persistentData.remove("main_entity");

        landing.main_entity.persistentData.putByte("stage", global.landing_sequence.FINISHED_STAGE);
    }
    else {
        landing.main_entity.persistentData.putByte("tick_counter", tick_counter);
    }
}

function removeFire(main_entity, level) {
    let fire_block = level.getBlock(main_entity.blockX, main_entity.blockY - 1, main_entity.blockZ);
    if (fire_block.id === "ptdye:upside_down_fire") {
        fire_block.set("minecraft:air");
    }
}

function check_floor_for_entity(entity, level) {
    let y_diff = -0.6;
    let checked_y_level = Math.floor(entity.getY() + y_diff)
    return check_floor(level, entity.blockX, checked_y_level, entity.blockZ)
}

function clear_path_for_landing(entity, level) {
    for (let x_diff = -1; x_diff <= 1; x_diff++) {
        for (let z_diff = -1; z_diff <= 1; z_diff++) {
            let block = level.getBlock(
                entity.blockX + x_diff,
                entity.blockY - 1,
                entity.blockZ + z_diff
            );
            block.getDrops().forEach(drop => {
                block.popItem(drop);
            });
            block.set("minecraft:air");
        }
    }
}