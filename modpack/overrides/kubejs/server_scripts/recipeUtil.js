function getRecipes() {
    onEvent('recipes', event => {
        return event.getRecipes()
    })
}

addRecipe(RecipeJS r, RecipeTypeJS type, ListJS args1) {
    addedRecipes.add(r);

    if (ServerSettings.instance.logAddedRecipes) {
        ConsoleJS.SERVER.info("+ " + r.getType() + ": " + r.getFromToString());
    } else if (ConsoleJS.SERVER.shouldPrintDebug()) {
        ConsoleJS.SERVER.debug("+ " + r.getType() + ": " + r.getFromToString());
    }

    return r;
}

customFilter(RecipeFilter filter) {
    return filter;
}

forEachRecipe(RecipeFilter filter, Consumer<RecipeJS> consumer) {
    if (filter == RecipeFilter.ALWAYS_TRUE) {
        originalRecipes.forEach(consumer);
    } else if (filter != RecipeFilter.ALWAYS_FALSE) {
        originalRecipes.stream().filter(filter).forEach(consumer);
    }
}

forEachRecipeAsync(RecipeFilter filter, Consumer<RecipeJS> consumer) {
    if (filter == RecipeFilter.ALWAYS_TRUE) {
        originalRecipes.parallelStream().forEach(consumer);
    } else if (filter != RecipeFilter.ALWAYS_FALSE) {
        originalRecipes.parallelStream().filter(filter).forEach(consumer);
    }
}

countRecipes(RecipeFilter filter) {
    if (filter == RecipeFilter.ALWAYS_TRUE) {
        return originalRecipes.size();
    } else if (filter != RecipeFilter.ALWAYS_FALSE) {
        return (int) originalRecipes.stream().filter(filter).count();
    }

    return 0;
}

remove(RecipeFilter filter) {
    MutableInt count = new MutableInt();
    forEachRecipe(filter, r ->
    {
        if (removedRecipes.add(r)) {
            if (ServerSettings.instance.logRemovedRecipes) {
                ConsoleJS.SERVER.info("- " + r + ": " + r.getFromToString());
            } else if (ConsoleJS.SERVER.shouldPrintDebug()) {
                ConsoleJS.SERVER.debug("- " + r + ": " + r.getFromToString());
            }

            count.increment();
        }
    });
    return count.getValue();
}

replaceInput(RecipeFilter filter, IngredientJS ingredient, IngredientJS with, boolean exact) {
    AtomicInteger count = new AtomicInteger();
    String is = ingredient.toString();
    String ws = with.toString();

    forEachRecipeAsync(filter, r ->
    {
        if (r.replaceInput(ingredient, with, exact)) {
            count.incrementAndGet();
            modifiedRecipes.add(r);

            if (ServerSettings.instance.logAddedRecipes || ServerSettings.instance.logRemovedRecipes) {
                ConsoleJS.SERVER.info("~ " + r + ": IN " + is + " -> " + ws);
            } else if (ConsoleJS.SERVER.shouldPrintDebug()) {
                ConsoleJS.SERVER.debug("~ " + r + ": IN " + is + " -> " + ws);
            }
        }
    });

    modifiedRecipesCount.addAndGet(count.get());
    return count.get();
}

replaceInput(RecipeFilter filter, IngredientJS ingredient, IngredientJS with) {
    return replaceInput(filter, ingredient, with, false);
}

replaceInput(IngredientJS ingredient, IngredientJS with) {
    return replaceInput(RecipeFilter.ALWAYS_TRUE, ingredient, with);
}

replaceOutput(RecipeFilter filter, IngredientJS ingredient, ItemStackJS with, boolean exact) {
    AtomicInteger count = new AtomicInteger();
    String is = ingredient.toString();
    String ws = with.toString();

    forEachRecipeAsync(filter, r ->
    {
        if (r.replaceOutput(ingredient, with, exact)) {
            count.incrementAndGet();
            modifiedRecipes.add(r);

            if (ServerSettings.instance.logAddedRecipes || ServerSettings.instance.logRemovedRecipes) {
                ConsoleJS.SERVER.info("~ " + r + ": OUT " + is + " -> " + ws);
            } else if (ConsoleJS.SERVER.shouldPrintDebug()) {
                ConsoleJS.SERVER.debug("~ " + r + ": OUT " + is + " -> " + ws);
            }
        }
    });

    modifiedRecipesCount.addAndGet(count.get());
    return count.get();
}

replaceOutput(RecipeFilter filter, IngredientJS ingredient, ItemStackJS with) {
    return replaceOutput(filter, ingredient, with, false);
}

replaceOutput(IngredientJS ingredient, ItemStackJS with) {
    return replaceOutput(RecipeFilter.ALWAYS_TRUE, ingredient, with);
}

getRecipeFunction(@Nullable String id) {
    if (id == null || id.isEmpty()) {
        throw new NullPointerException("Recipe type is null!");
    }

    String namespace = UtilsJS.getNamespace(id);
    String path = UtilsJS.getPath(id);

    Object func0 = recipeFunctions.get(namespace);

    if (func0 instanceof RecipeFunction) {
        return (RecipeFunction) func0;
    } else if (!(func0 instanceof Map)) {
        throw new NullPointerException("Unknown recipe type: " + id);
    }

    RecipeFunction func = ((Map<String, RecipeFunction>) func0).get(path);

    if (func == null) {
        throw new NullPointerException("Unknown recipe type: " + id);
    }

    return func;
}

custom(Object o) {
    MapJS json = Objects.requireNonNull(MapJS.of(o));
    return getRecipeFunction(json.getOrDefault("type", "").toString()).createRecipe(new Object[]{json});
}

printTypes() {
    ConsoleJS.SERVER.info("== All recipe types [used] ==");
    HashSet<String> list = new HashSet<>();
    originalRecipes.forEach(r -> list.add(r.type.toString()));
    list.stream().sorted().forEach(ConsoleJS.SERVER::info);
    ConsoleJS.SERVER.info(list.size() + " types");
}

printAllTypes() {
    ConsoleJS.SERVER.info("== All recipe types [available] ==");
    List<String> list = KubeJSRegistries.recipeSerializers().entrySet().stream().map(e -> e.getKey().location().toString()).sorted().collect(Collectors.toList());
    list.forEach(ConsoleJS.SERVER::info);
    ConsoleJS.SERVER.info(list.size() + " types");
}

printExamples(String type) {
    List<RecipeJS> list = originalRecipes.stream().filter(recipeJS -> recipeJS.type.toString().equals(type)).collect(Collectors.toList());
    Collections.shuffle(list);

    ConsoleJS.SERVER.info("== Random examples of '" + type + "' ==");

    for (int i = 0; i < Math.min(list.size(), 5); i++) {
        RecipeJS r = list.get(i);
        ConsoleJS.SERVER.info("- " + r.getOrCreateId() + ":\n" + JsonUtilsJS.toPrettyString(r.json));
    }
}

setItemErrors(boolean b) {
    RecipeJS.itemErrors = b;
}

stage(RecipeFilter filter, String stage) {
    forEachRecipe(filter, r -> r.stage(stage));
}