// priority: 100
const sealsThatHaveTextures = [ // add entries to this list when you add textures for the companies
  'magical_landscaping_co',
  'black_hole_bagels_llc'
]

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
  let seal = sealsThatHaveTextures.includes(company) ? company : 'default'
  let companyTitle = Utils.snakeCaseToTitleCase(company)
  return {
    item : Item.of(
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
    completedItem : Item.of(
      'wares:completed_delivery_agreement',
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
    )
  }
  return 
}
function simple(items) {
  if (!Array.isArray(items)) items = [items];
  return `[${items
    .map((item) => {
      if (typeof item === "string") item = Item.of(item);
      let nbt = item.toNBT();
      nbt.Count = item.count;
      return nbt
    })
    .join(", ")}]`;
}

function tradeBranch(outputTrades, inputTrades) {
  addMixing(
    outputTrades.map((trade) => trade.item),
    inputTrades.map((trade) => trade.completedItem.weakNBT())
  );
}