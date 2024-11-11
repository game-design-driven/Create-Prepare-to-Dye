BlockEvents.rightClicked("createdieselgenerators:diesel_engine", (event) => {
  if (event.block != "createdieselgenerators:diesel_engine") return;
  event.cancel();
});
BlockEvents.rightClicked("create:spout", (event) => {
  if (event.block != "create:spout") return;
  event.cancel();
});
