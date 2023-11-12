// Priority: 10
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
  return {
    item : Item.of(
      "wares:delivery_agreement",
      `{\
          display:{Name:'{\"text\":\"${
            company + " - " + title
          }\",\"italic\":\"false\"}'},\
          ordered:${orderedAmount},\
          message:'{"text":"${message}"}',\
          buyerName:'{"color":"#409D9B","text":"${company}"}',\
          paymentItems:${simple(paymentItems)},\
          requestedItems:${simple(requestedItems)},\
          title:\'{"text":"${title}"}\'\
      }`
    ),
    completedItem : Item.of(
      'wares:completed_delivery_agreement',
      `{\
          buyerName:'{\"color\":\"#409D9B\",\"text\":\"${company}\"}',\
          delivered:${orderedAmount},\
          display:{Name:'{\"text\":\"${
            company + " - " + title
          }\",\"italic\":\"false\"}'},\
          isCompleted:1b,\
          message:'{\"text\":\"${message}\"}',\
          ordered:2,\
          paymentItems:${simple(paymentItems)},\
          requestedItems:${simple(requestedItems)},\
          title:'{\"text\":\"${title}\"}'}`
    )
  }
  return 
}
function simple(items) {
  if (!Array.isArray(items)) items = [items];
  return `[${items
    .map((item) => {
      if (typeof item === "string") item = Item.of(item);
      return item.toNBT();
    })
    .join(", ")}]`;
}