// priority: 100
global.allAgreements = [];
const sealsThatHaveTextures = [
  // add entries to this list when you add textures for the companies
  "magical_landscaping_co",
  "black_hole_bagels_llc",
  "boards_and_wires",
  "bobs_construction_fleet",
];

// let allAgreements = [];
function getAgreement(
  paymentItems,
  requestedItems,
  title,
  orderedAmount,
  company,
  message
) {
  if (!orderedAmount) orderedAmount = parseInt(1);
  if (!title) title = "stuffs";
  let seal = sealsThatHaveTextures.includes(company) ? company : "default";
  let companyTitle = Utils.snakeCaseToTitleCase(company);
  let agreementObj = {
    item: Item.of(
      "wares:delivery_agreement",
      `{\
          display:{Name:'{\"text\":\"${
            companyTitle + " - " + title
          }\",\"italic\":\"false\"}'},\
          ordered:${orderedAmount},\
          message:'{"text":"${message}"}',\
          seal:'${seal}',\
          buyerName:'{"color":"#409D9B","text":"${companyTitle}"}',\
          paymentItems:${simple(paymentItems)},\
          requestedItems:${simple(requestedItems)},\
          title:\'{"text":"${title}"}\'\
      }`
    ),
    completedItem: Item.of(
      "wares:completed_delivery_agreement",
      `{\
          buyerName:'{"color":"#409D9B","text":"${companyTitle}"}',\
          delivered:${orderedAmount},\
          display:{Name:'{\"text\":\"${
            companyTitle + " - " + title
          }\",\"italic\":\"false\"}'},\
          isCompleted:1b,\
          message:'{"text":"${message}"}',\
          seal:'${seal}',\
          ordered:${orderedAmount},\
          paymentItems:${simple(paymentItems)},\
          requestedItems:${simple(requestedItems)},\
          title:\'{"text":"${title}"}\'\
      }`
    ),
  };
  global.allAgreements=global.allAgreements.filter(f => f.nbt !== agreementObj.item.nbt).concat([agreementObj.item])
  global.allAgreements=global.allAgreements.filter(f => f.nbt !== agreementObj.completedItem.nbt).concat([agreementObj.completedItem])
  console.info('All agreements so far '+global.allAgreements)
  return agreementObj;
}
function simple(items) {
  if (!Array.isArray(items)) items = [items];
  return `[${items
    .map((item) => {
      if (typeof item === "string") item = Item.of(item);
      let nbt = item.toNBT();
      nbt.Count = item.count;
      return nbt;
    })
    .join(", ")}]`;
}

function tradeBranch(outputTrades, inputTrades) {
  if (!Array.isArray(outputTrades)) outputTrades = [outputTrades];
  if (!Array.isArray(inputTrades)) inputTrades = [inputTrades];
  if (inputTrades.length == 1) {
    inputTrades.push({ completedItem: Item.of("stick") });
  }
  addMixing(
    outputTrades.map((trade) => trade.item),
    inputTrades.map((trade) => trade.completedItem.weakNBT())
  );
}

console.info("Loading wares manager");
ServerEvents.lowPriorityData(event => {
  let obj = {
    added: [],
  };
  console.info('all agreements  '+global.allAgreements)
  global.allAgreements.forEach((item) => {
    obj.added.push({
      stack: `item:${item.id}${item.nbt}`,
    });
  });
  
  JsonIO.write("kubejs/assets/emi/index/stacks/added_agreements.json", obj);
})