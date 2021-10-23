import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;
//summoning


SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:oak_sapling>)
        .setReagents([<item:minecraft:stone>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:cow>)
        )
);




SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:ender_eye>)
        .setReagents([<item:minecraft:end_crystal>*4])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:ender_dragon>)
        )
        .setWeight(1)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.message = "Shes comiming!";
            } else {
            attempt.success = false;
                attempt.message = "summon this in the rain!";
        }
    })
);

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:ender_eye>)
        .setReagents([<item:minecraft:end_crystal>*4])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:enderman>)
            .setData({
                "CustomName":"confused enderman",
                "CustomNameVisible":1
            })
        )
        .setWeight(1)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.message = "wheh?";
             } else {
            attempt.success = false;
                attempt.message = "summon this in the rain!";
        }
        
    })
);