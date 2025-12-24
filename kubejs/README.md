# KubeJS Scripts - Create: Prepare to Dye 2

Code conventions and patterns for this modpack's KubeJS scripts.

## File Header Format

Every script file should start with:

```javascript
//priority: N
//Create Prepare to Dye 2 - Short Description
```

**Priority values:**
- `100` - Config definitions (must load first)
- `1` - Standard recipes and features
- `0` - Player events, tweaks
- `-1` - Scripts that depend on other scripts running first

## Using Config Values

Configs are defined in `startup_scripts/config.js`. Generated file: `config/create-prepare-to-dye-2.toml`.

**Adding a config entry** (in `startup_scripts/config.js`):
```javascript
// Inside an existing section (between push/pop)
event.comment("Description shown in the toml file");
global.config_myValue = event.intValue("myValue", 10, 1, 100);

// Available types:
// event.intValue(name, default, min, max)
// event.doubleValue(name, default, min, max)
// event.booleanValue(name, default)
```

**Using in server scripts:**
```javascript
let value = global.config_myValue.get();
```

## Comment Conventions

### Searchable Section Headers:
don't use box comments or other special formatting or symbols
```javascript
// SECTION NAME - searchable description
```

### Inline Comments
```javascript
// TODO: needs implementation
// FIXME: broken when X happens
// NOTE: important context for future readers
```

## Code Style

### Variable Naming
```javascript
// Constants - UPPER_SNAKE_CASE
const DEVICE_GROUPS = { ... };
const EXTRA_PLAYER_ITEMS = [ ... ];

// Local variables - camelCase
let outputAmount = 8;
let fadingMult = global.config_fadingMultiplier.get();

// Config globals - config_ prefix
global.config_swimSpeed = event.doubleValue(...);
```

### Functions
```javascript
// Use descriptive names, never abbreviations, characters don't cost salt
function applyAutomatonAttributes(player) { ... }
function getExtraPlayerItems() { ... }
function fillBlockWithBucket(block, event) { ... }
```


## Tips

1. **Test incrementally** - Add a few recipes, reload, verify
2. **Check logs** - `logs/kubejs/` for errors
3. **Use `/reload`** - Reloads server scripts without restart
4. **Use `/kubejs errors`** - Shows script errors in-game
5. **Prefer tags** - Use `#forge:ingots/iron` over `minecraft:iron_ingot` when possible
