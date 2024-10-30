BlockEvents.placed(event=>{
    if(event.block.id !== "create:schematicannon") return;

    let data = event.block.entityData;
    data.putFloat("Fuel",1);
    event.block.setEntityData(data);
})