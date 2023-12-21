/**
 * 
 * @param {Internal.CommandContext_<Internal.CommandSourceStack>} c 
 * @returns 
 */
global.customCommandGiveItems = (c) => {
  
  try{
    let nbt = {BlockEntityTag:{stacks: []}, display:{Name:`{"text":"items"}`}}

    let text = c.getInput().replace("getcrate ","");

    JSON.parse(text.replaceAll("'",'"')).forEach((element,i) => {
      nbt.BlockEntityTag.stacks.push({Count:1, id: element})
    });

    let pos = c.source.position;

    c.source.server.runCommandSilent(`/give @p quark:crate${JSON.stringify(nbt)}`)

  }catch(e){
    console.log(e);
  }
  return 1;
}

function wrapCall(c){
  return global.customCommandGiveItems(c)
}


ServerEvents.commandRegistry(e => {
  const { commands: Commands, arguments: Arguments } = e;
  e.register(
    Commands.literal("getcrate")
      .requires(s => s.hasPermission(2))
      .then(
        Commands.argument('itemlist', Arguments.GREEDY_STRING.create(e))
          .executes(wrapCall)
      )
  );
})