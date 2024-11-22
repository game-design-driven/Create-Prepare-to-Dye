/**
 * 
 * @param {Internal.ServerPlayer} player 
 */
function compactItems(player,keepOne){

  let limit = keepOne ? 1 : 0;

  let tallies = {}
  player.inventory.allItems.toArray().forEach(
    /** @param {Internal.ItemStack} i */
    i=>{
      if(i.hasTag("forge:devices") && !i.hasTag("ptdye:recycle_excluded") && !i.hasNBT()){
        let [_,type,fraction] = i.getTags()
          .toList()
          .filter((tag) => tag.location().path.startsWith("devices/"))[0]
          .location().path.split("/")
        
        fraction = fraction || "1";
        let fractionKey = "_"+String(fraction);
        tallies[type] = tallies[type] ?? {}
        tallies[type][fractionKey] = tallies[type][fractionKey] ?? {a:0,f:Number(fraction),items:[]}
        tallies[type][fractionKey].a += i.count;
        tallies[type][fractionKey].items.push(i);
        //console.log(`${i.id} ${type}, 1/${fraction} devices`)
      }
    }
  )

  
  let anySucceeded = false;
  
  for(let [type,amounts] of Object.entries(tallies)){
    let usedItems = {};

    let totalDevices = 0;
    
    Object.entries(amounts).forEach(([_,a])=>{

      let runningTally = 0;
      let runningItems = [];
      a.items.forEach(
        /** @param {Internal.ItemStack} i */
        i=>{
          let id = i.id;
          
          usedItems[id] = usedItems[id] || {c:0,name:i.displayName};

          //there shouldn't be two identical stacks with a single residual item. this handles that
          let individualLmit = usedItems[id].c > 0 ? 0 : limit

          //we need a tiny corrective figure here, because rounding errors are EVIL.
          let fullDevices = Math.floor((i.count - individualLmit)/a.f + 0.000001);
          
          totalDevices += fullDevices;

          i.setCount(i.count - fullDevices * a.f)
          usedItems[id].c += fullDevices * a.f;

          if(i.count>individualLmit){
            let previousTally = runningTally;
            
            runningTally += i.count - individualLmit;
            
            if(runningTally>=a.f){
              totalDevices++;
              
              console.log(`${a.f} - ${previousTally} = ${a.f - previousTally}`)
              let remainder = i.count - (a.f - previousTally);
              runningTally = remainder;
              
              runningItems.forEach(i=>{
                i.setCount(individualLmit);
              })

              if(remainder > individualLmit){
                usedItems[id].c += (i.count - remainder)
                i.setCount(remainder);
                runningItems = [i];
              }else{
                usedItems[id].c += (i.count - individualLmit)
                i.setCount(individualLmit);
                runningItems = [];
              }
            }else{
              runningItems.push(i);
            }
          }else{
            usedItems[id].c += (i.count - individualLmit)
            i.setCount(individualLmit)
          }
        }
      )
    })
    
    let usedText = [
      Text.of("Used items:\n").gray()
    ];
    
    for(let usedItem of Object.values(usedItems)){
      //easier to deal with it like this, but these get in here because an item automatically becomes air once it's count hits 0.
      if(usedItem.c == 0) continue;

      let name = Text.of(usedItem.name)
      name = name.siblings.get(0)
      usedText.push(name.yellow())
      usedText.push(Text.of("x ").gold())
      usedText.push(Text.of(usedItem.c).yellow())
      usedText.push(Text.of("\n"))
    }

    if(totalDevices>0){
      player.tell(Text.of([
        Text.of(totalDevices).yellow(),
        Text.of("x ").gold(),
        Text.of(type).yellow(),
        Text.of(` devices created! `).gold(),
        Text.of(`(`).darkGray(),
        Text.of(`used`).gray().hover(Text.of(usedText)),
        Text.of(`)`).darkGray()
      ]));
      
      player.give(Item.of(`#forge:generics/devices/${type}`,totalDevices))

      anySucceeded = true;
    }
  }

  if(!anySucceeded){
    player.tell(Text.of("Nothing to compact!").red())
  }
}

/**
 * 
 * @param {Internal.CommandContext_<Internal.CommandSourceStack>} c 
 * @returns 
 */
global.customCommandBulkRecycle = (c,all) => {
  try{
    let player = c.source.player

    compactItems(player,all)

  }catch(e){
    console.log("error!")
    console.log(e.toString())
  }
  return 1;
}


ServerEvents.commandRegistry(e => {
  const { commands: Commands } = e;
  e.register(
    Commands.literal("bulkrecycle")
    .executes(c=>global.customCommandBulkRecycle(c,true))
    .then(
        Commands.literal("all")
        .executes(c=>global.customCommandBulkRecycle(c,false)))
    )
})