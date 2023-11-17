//priority:-10
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

