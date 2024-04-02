
//patterns kinda make some things too easy, e.g. unpacking storage blocks. we decided that 3x3 packing is fine, although we could probably change our minds later.
if(feature("Remove Crafty Crate Patterns")){
  removeItems([
    'botania:pattern_1_1', 'botania:pattern_2_2', 'botania:pattern_1_2',
    'botania:pattern_2_1', 'botania:pattern_1_3', 'botania:pattern_3_1',
    'botania:pattern_2_3', 'botania:pattern_3_2', 'botania:pattern_donut'
  ]);
}
