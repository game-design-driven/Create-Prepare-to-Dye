const PLATFORM_SPAWN_HEIGHT = 330;
const PLATFORM_SPAWN_RADIUS = 10;

if (feature("Trading platforms")) {
    ItemEvents.rightClicked("ptdye:trading_transceiver", event => {

        event.item.count --;
        event.player.swing();
        
        let trade_items = global.starterDeals.map(deal => {
            return deal.item;
        });
        
        if (!Utils.server.persistentData.getBoolean("spawned_first_trading_platform")) {
            Utils.server.persistentData.putBoolean("spawned_first_trading_platform", true);
            spawnTradingPlatform(event.player, "Oculus the Wise", trade_items);
        }
        else {
            spawnTradingPlatform(event.player, generatePilotName());
        }
        
        Utils.server.runCommandSilent(`playsound ptdye:trading_platform.transceiver.use player @a ${event.player.x} ${event.player.y} ${event.player.z} 0.4`);
        
        event.cancel();

    })
}

function spawnTradingPlatform(player, pilot_name, items) {
    items = items || [];
    let spawn_coordinates = generate_spawn_coordinates(player);

    let main_entity = spawnMainEntity(player.level, spawn_coordinates);
    let base_contraption = spawnBaseContraption(player.level, spawn_coordinates, main_entity, items);
    let roof_contraption = spawnRoofContraption(player.level, spawn_coordinates, main_entity);
    let pilot = spawnPilot(player.level, spawn_coordinates, main_entity, pilot_name);

    global.active_landings.push({
        main_entity: main_entity,
        base_contraption: base_contraption,
        roof_contraption: roof_contraption,
        pilot: pilot,
        last_played_height: null,
    });

    main_entity.persistentData.putUUID("base_contraption", base_contraption.uuid);
    main_entity.persistentData.putUUID("roof_contraption", roof_contraption.uuid);
    main_entity.persistentData.putUUID("pilot", pilot.uuid);
}

function spawnMainEntity(event, spawn_coordinates) {
    /** @type {Internal.LivingEntity} */
    let main_entity = event.level.createEntity("minecraft:chicken");
    main_entity.setPos(spawn_coordinates.x, spawn_coordinates.y, spawn_coordinates.z);
    main_entity.setInvulnerable(true);
    main_entity.setSilent(true);
    main_entity.potionEffects.add("minecraft:invisibility", 100000, 1, false, false);
    main_entity.setNoAi(true);
    main_entity.lootTable = "minecraft:empty";
    main_entity.spawn();
    main_entity.persistentData.putBoolean("is_landing_sequence_entity", true);
    main_entity.persistentData.putString("landing_sequence_component", "main_entity");
    main_entity.persistentData.putByte("stage", global.landing_sequence.LANDING_STAGE);
    main_entity.persistentData.putByte("tick_counter", 0);
    main_entity.persistentData.putShort("floor_level", get_floor_level(event.level, main_entity.blockX, main_entity.blockZ));
    return main_entity;
}

function get_floor_level(level, x, z) {
    let y = PLATFORM_SPAWN_HEIGHT;
    while (!check_floor(level, x, y, z)) {
        y--;
    }
    return y
}

function check_floor(level, x, y, z) {
    for (let x_diff = -1; x_diff <= 1; x_diff++) {
        for (let z_diff = -1; z_diff <= 1; z_diff++) {
            let block = level.getBlock(
                x + x_diff,
                y,
                z + z_diff
            );
            if (!block.blockState.canBeReplaced("minecraft:water")) {
                return true;
            }
        }
    }
    return false;
}

function spawnBaseContraption(event, spawn_coordinates, main_entity, items) {
    let base_contraption = event.level.createEntity("create:contraption");
    // base_contraption.nbt = `{Contraption:{Actors:[{Data:{},FirstMovement:0b,Motion:[0.0d,0.0d,0.0d],Pos:{X:-1,Y:0,Z:0},RelativeMotion:[0.0d,0.0d,0.0d],Stall:0b}],Anchor:{X:-281,Y:-55,Z:50},Blocks:{BlockList:[{Pos:274877902848L,State:0},{Data:{Disabled:0b,Filter:{Count:0b,id:"minecraft:air"},FilterAmount:64,ForgeCaps:{},Powered:0b,UpTo:1b,id:"create:contraption_controls"},Pos:-274877906944L,State:1},{Pos:274877911042L,State:2},{Pos:-274877902848L,State:3},{Pos:0L,State:4},{Pos:4096L,State:5},{Pos:274877906944L,State:2},{Pos:549755809794L,State:2},{Pos:-4096L,State:3},{Pos:274877902850L,State:2},{Pos:274877911040L,State:2},{Pos:-4094L,State:2},{Data:{DeliveringManually:0b,ForgeCaps:{},Inventory:{Items:[],Size:14},Progress:0,id:"wares:delivery_table"},Pos:3L,State:6},{Pos:274877911039L,State:7},{Pos:-274877906943L,State:8},{Pos:4095L,State:9},{Pos:549755813887L,State:10},{Pos:1L,State:11},{Pos:-274877902847L,State:12},{Pos:274877906943L,State:13},{Pos:-274877902849L,State:14},{Pos:4097L,State:5},{Pos:274877906945L,State:2},{Pos:549755809793L,State:2},{Pos:-1L,State:15},{Pos:274877902849L,State:0},{Pos:274877911041L,State:2},{Pos:-274877898753L,State:16},{Pos:-4095L,State:17},{Pos:8191L,State:18},{Pos:274877915135L,State:19},{Pos:-274877906942L,State:2},{Pos:4094L,State:20},{Pos:2L,State:2},{Pos:-274877902846L,State:2},{Pos:4098L,State:2},{Pos:274877906946L,State:2},{Pos:549755809792L,State:2}],Palette:[{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"true"}},{Name:"create:contraption_controls",Properties:{facing:"east",open:"false",virtual:"false",waterlogged:"false"}},{Name:"quark:iron_plate"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"false"}},{Name:"create:white_seat"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"true"}},{Name:"wares:delivery_table",Properties:{agreement:"none",facing:"west"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"straight",waterlogged:"false"}},{Name:"botania:mana_glass_pane",Properties:{east:"false",north:"true",south:"true",waterlogged:"false",west:"false"}},{Name:"quark:iron_pillar",Properties:{axis:"y"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"outer_left",waterlogged:"false"}},{Name:"minecraft:air"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"true",south:"false",waterlogged:"false",west:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"south",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"outer_right",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"outer_left",waterlogged:"false"}},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"true",waterlogged:"false",west:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"north",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"outer_right",waterlogged:"false"}},{Name:"ptdye:upside_down_fire"}]},BottomlessSupply:0b,BoundsFront:[-3.0f,-2.0f,-3.0f,4.0f,4.0f,4.0f],DisabledActors:[],FluidStorage:[],InitialOrientation:"NORTH",Interactors:[{Pos:{X:-1,Y:0,Z:0}}],Passengers:[],RotationMode:"ROTATION_LOCKED",Seats:[],Stalled:0b,Storage:[],SubContraptions:[],Superglue:[{From:[-1.0d,-2.0d,-1.0d],To:[2.0d,4.0d,2.0d]}],Type:"mounted"},display:{}}`;
    base_contraption.nbt = generate_base_contraption_nbt(items);
    base_contraption.setPos(spawn_coordinates.x, spawn_coordinates.y, spawn_coordinates.z);
    base_contraption.spawn();
    base_contraption.startRiding(main_entity, true);
    base_contraption.persistentData.putBoolean("is_landing_sequence_entity", true);
    base_contraption.persistentData.putString("landing_sequence_component", "base_contraption");
    base_contraption.persistentData.putUUID("main_entity", main_entity.uuid);
    return base_contraption;
}

function generate_base_contraption_nbt(items) {
    let nbts = items.map((item, index)=> {
        return getItemNBTWithSlot(item, index + 2);
    });
    let joined_nbts = nbts.join(",");
    return `{
        Contraption: {
            Actors:[],
            Blocks:{
                BlockList:[
                    {Pos:274877902848L,State:0},
                    {Data:{Disabled:0b,Filter:{Count:0b,id:"minecraft:air"},FilterAmount:64,ForgeCaps:{},Powered:0b,UpTo:1b,id:"create:contraption_controls"},Pos:-274877906944L,State:1},
                    {Pos:274877911042L,State:2},{Pos:-274877902848L,State:3},{Pos:0L,State:4},{Pos:4096L,State:5},
                    {Pos:274877906944L,State:2},{Pos:549755809794L,State:2},{Pos:-4096L,State:3},{Pos:274877902850L,State:2},
                    {Pos:274877911040L,State:2},{Pos:-4094L,State:2},
                    {Data:{DeliveringManually:0b,ForgeCaps:{},Inventory:{Items:[${joined_nbts}],Size:14},Progress:0,id:"wares:delivery_table"},Pos:3L,State:6},
                    {Pos:274877911039L,State:7},{Pos:-274877906943L,State:8},{Pos:4095L,State:9},{Pos:549755813887L,State:10},
                    {Pos:1L,State:11},{Pos:-274877902847L,State:12},{Pos:274877906943L,State:13},{Pos:-274877902849L,State:14},
                    {Pos:4097L,State:5},{Pos:274877906945L,State:2},{Pos:549755809793L,State:2},{Pos:-1L,State:15},
                    {Pos:274877902849L,State:0},{Pos:274877911041L,State:2},{Pos:-274877898753L,State:16},{Pos:-4095L,State:17},{Pos:8191L,State:18},{Pos:274877915135L,State:19},{Pos:-274877906942L,State:2},{Pos:4094L,State:20},{Pos:2L,State:2},{Pos:-274877902846L,State:2},{Pos:4098L,State:2},{Pos:274877906946L,State:2},{Pos:549755809792L,State:2}],Palette:[{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"true"}},{Name:"create:contraption_controls",Properties:{facing:"east",open:"false",virtual:"false",waterlogged:"false"}},{Name:"quark:iron_plate"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"false"}},{Name:"create:white_seat"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"false",waterlogged:"false",west:"true"}},{Name:"wares:delivery_table",Properties:{agreement:"none",facing:"west"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"straight",waterlogged:"false"}},{Name:"botania:mana_glass_pane",Properties:{east:"false",north:"true",south:"true",waterlogged:"false",west:"false"}},{Name:"quark:iron_pillar",Properties:{axis:"y"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"outer_left",waterlogged:"false"}},{Name:"minecraft:air"},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"true",south:"false",waterlogged:"false",west:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"south",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"outer_right",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"east",half:"top",shape:"outer_left",waterlogged:"false"}},{Name:"botania:mana_glass_pane",Properties:{east:"true",north:"false",south:"true",waterlogged:"false",west:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"north",half:"top",shape:"straight",waterlogged:"false"}},{Name:"quark:iron_plate_stairs",Properties:{facing:"west",half:"top",shape:"outer_right",waterlogged:"false"}},{Name:"ptdye:upside_down_fire"}]},BottomlessSupply:0b,BoundsFront:[-3.0f,-2.0f,-3.0f,4.0f,4.0f,4.0f],DisabledActors:[],FluidStorage:[],InitialOrientation:"NORTH",Interactors:[{Pos:{X:-1,Y:0,Z:0}}],Passengers:[],RotationMode:"ROTATION_LOCKED",Seats:[],Stalled:0b,Storage:[],SubContraptions:[],Superglue:[{From:[-1.0d,-2.0d,-1.0d],To:[2.0d,4.0d,2.0d]}],Type:"mounted"},display:{}
    }`;
}

function getItemNBTWithSlot(item, slot) {
    let nbt = item.toNBT();
    nbt.Slot = slot;
    return nbt.toString();
}

function spawnRoofContraption(event, spawn_coordinates, main_entity) {
    let roof_contraption = event.level.createEntity("create:contraption");
    roof_contraption.nbt = `{id:"create:contraption",Contraption:{Actors:[],Anchor:{X:-195,Y:-58,Z:112},Blocks:{BlockList:[{Pos:274877911042L,State:0},{Pos:549755809793L,State:0},{Pos:-274877902848L,State:0},{Pos:0L,State:1},{Pos:549755809794L,State:0},{Pos:274877911041L,State:0},{Pos:-4096L,State:0},{Pos:549755809795L,State:2},{Pos:-4095L,State:0},{Pos:274877911040L,State:0},{Pos:274877902851L,State:2},{Pos:-4094L,State:0},{Pos:-4093L,State:2},{Pos:-274877906941L,State:2},{Pos:3L,State:3},{Pos:-274877902845L,State:2},{Pos:2L,State:3},{Pos:4099L,State:2},{Pos:274877906947L,State:2},{Pos:-274877902846L,State:0},{Pos:1L,State:3},{Pos:274877911043L,State:2},{Pos:-274877902847L,State:0},{Pos:549755809792L,State:0}],Palette:[{Name:"create:metal_girder",Properties:{axis:"y",bottom:"true",top:"true",waterlogged:"false",x:"false",z:"false"}},{Name:"minecraft:air"},{Name:"quark:iron_plate_slab",Properties:{type:"bottom",waterlogged:"false"}},{Name:"minecraft:air"}]},BottomlessSupply:0b,BoundsFront:[-3.0f,0.0f,-3.0f,4.0f,4.0f,4.0f],DisabledActors:[],FluidStorage:[],InitialOrientation:"WEST",Interactors:[],Passengers:[],RotationMode:"ROTATION_LOCKED",Seats:[],Stalled:0b,Storage:[],SubContraptions:[],Superglue:[{From:[-1.0d,0.0d,-1.0d],To:[2.0d,4.0d,2.0d]}],Type:"mounted"},display:{}}`;
    roof_contraption.setPos(spawn_coordinates.x, spawn_coordinates.y, spawn_coordinates.z);
    roof_contraption.spawn();
    roof_contraption.startRiding(main_entity, true);
    roof_contraption.persistentData.putBoolean("is_landing_sequence_entity", true);
    roof_contraption.persistentData.putString("landing_sequence_component", "roof_contraption");
    roof_contraption.persistentData.putUUID("main_entity", main_entity.uuid);
    return roof_contraption;
}

function spawnPilot(event, spawn_coordinates, main_entity, name) {
    let pilot = event.level.createEntity("minecraft:chicken");
    pilot.setPos(spawn_coordinates.x, spawn_coordinates.y, spawn_coordinates.z);
    pilot.setCustomName(name);
    pilot.spawn();
    pilot.startRiding(main_entity, true);
    pilot.persistentData.putBoolean("is_landing_sequence_entity", true);
    pilot.persistentData.putString("landing_sequence_component", "pilot");
    pilot.persistentData.putUUID("main_entity", main_entity.uuid);
    return pilot;
}

function generate_spawn_coordinates(player) {
    return {
        x: player.blockX + 0.5 + randInt(-PLATFORM_SPAWN_RADIUS, PLATFORM_SPAWN_RADIUS + 1),
        z: player.blockZ + 0.6 + randInt(-PLATFORM_SPAWN_RADIUS, PLATFORM_SPAWN_RADIUS + 1),
        y: PLATFORM_SPAWN_HEIGHT
    };
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}