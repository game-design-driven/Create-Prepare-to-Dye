// You can turn off auto generate in common.properties
// You can also use '/advjs' command to generate this
AdvJSEvents.advancement(event => {
    const { PREDICATE, TRIGGER } = event;

    // Define trigger
    const jump5times = TRIGGER.tick(triggerBuilder =>
        triggerBuilder.addStat(Stats.JUMP, Stats.CUSTOM, { min: 5 }));
    const bred_in_nether = TRIGGER.bredAnimals(triggerBuilder => {
        triggerBuilder.setChildByPredicate(PREDICATE.entityFromJson({
            stepping_on: {
                dimension: "the_nether"
            }
        }))
    });
    // AdvJS custom trigger
    const destroy_dirt = TRIGGER.blockDestroyed(triggerBuilder => triggerBuilder.setBlock("dirt"));
    // Your custom trigger
    const get_adv = TRIGGER.custom("advjs:get_adv");

    // Create root advancement
    const root = event.create("advjs:hell")
        .display(displayBuilder => {
            displayBuilder.setTitle("AdvancementJS")
            displayBuilder.setDescription("Quick example")
            displayBuilder.setIcon("diamond")
        })
        .criteria(criteriaBuilder => criteriaBuilder.add("dirt", destroy_dirt))
        .rewards(rewardsBuilder => {
            rewardsBuilder.setExperience(100)
            // AdvJS custom reward
            rewardsBuilder.addEffect("absorption", 200)
        })
        // Make it repeatable
        .repeatable();

    // Add child for root
    root.addChild("child1", childBuilder => {
        childBuilder
            .display(displayBuilder => {
                displayBuilder.setTitle(Text.red("Holy"))
                displayBuilder.setDescription(Text.red("Hell starts"))
            })
            .criteria(criteriaBuilder => {
                // 'OR' means that if you want to achieve this advancement,
                // you just need one of two triggers matched below
                criteriaBuilder.setStrategy(RequirementsStrategy.OR)
                criteriaBuilder.add("bred", bred_in_nether)
                criteriaBuilder.add("jump", jump5times)
                criteriaBuilder.add("get_adv", get_adv)
            })
            .rewards(rewardsBuilder => {
                rewardsBuilder.setRecipes("minecraft:lodestone", "minecraft:brewing_stand")
                rewardsBuilder.setExperience(100)
            })
    });

    // Remove an exist advancement by AdvancementFilter, available filter was writen in doc.
    // you can also remove by id: 'event.remove("minecraft:story/lava_bucket");'
    event.remove({
        mod: "minecraft",
        icon: "minecraft:lava_bucket",
        frame: "task"
    });

    // Modify an exist advancement
    event.get("minecraft:story/smelt_iron")
        // Apply offset to display
        .displayOffset(1, 1, true)
        .modifyDisplay(displayBuilder => displayBuilder.setIcon("diamond_pickaxe"))
        .addChild("child2", childBuilder => {
            childBuilder
                .display(displayBuilder => {
                    displayBuilder.setIcon("recovery_compass")
                    displayBuilder.setTitle('I will come back!')
                    displayBuilder.setDescription(Text.green("Good luck"))
                    // You can also apply display in DisplayBuilder
                    displayBuilder.offset(-1, 0)
                })
                // The trigger could also be created from json
                .criteria(criteriaBuilder => criteriaBuilder.add("go_back_to_home", TRIGGER.fromJson({
                    "trigger": "minecraft:changed_dimension",
                    "conditions": {
                        "from": "minecraft:the_end",
                        "to": "minecraft:overworld"
                    }
                })))
                // Check if parent done, else it will not be done
                .requireParentDone()
        });
})

AdvJSEvents.lock(event => {
    event.result("stone_slab", "minecraft:story/smelt_iron");
    event.itemUse("spyglass", "minecraft:story/smelt_iron");
    event.blockInteract("chest", "minecraft:story/smelt_iron");
    event.entityInteract("villager", "minecraft:story/smelt_iron");
})

// Compat with 'Better Advancements'
AdvJSEvents.betterAdv(event => {
    event.modify("advjs:hell/child1").posX(0).posY(32).hideLines()
})

PlayerEvents.advancement(event => {
    const player = event.getPlayer();
    // The first argument is use for match player predicate, the other two is the matches you defined
    CustomTriggers.of("advjs:get_adv").trigger(player, event.getAdvancement(), player.username)
})
