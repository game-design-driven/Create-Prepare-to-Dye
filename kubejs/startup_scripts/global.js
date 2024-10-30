// priority: 10000
const IS_CLIENT_ENVIRONMENT = Platform.isClientEnvironment() 

global.colors = ['white', 'orange', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'magenta', 'blue', 'brown', 'green', 'red', 'black']

global.forge = { }
if (IS_CLIENT_ENVIRONMENT) {
  global.forge.forgeHook = Java.loadClass('net.minecraftforge.common.ForgeHooks')
}

global.kubejs = { }
global.kubejs.BlockEntityJS = Java.loadClass('dev.latvian.mods.kubejs.block.entity.BlockEntityJS')
global.kubejs.UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')

global.java = { }
global.java.Float = Java.loadClass('java.lang.Float')

global.minecraft = { }
global.minecraft.Block = { }
global.minecraft.Block.BehaviourProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
global.minecraft.Block.BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
global.minecraft.DyeItem = Java.loadClass('net.minecraft.world.item.DyeItem')
global.minecraft.FlowerBlock = Java.loadClass('net.minecraft.world.level.block.FlowerBlock')
global.minecraft.Heightmap = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap')
global.minecraft.ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
global.minecraft.MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')
global.minecraft.Registry = Java.loadClass('net.minecraft.core.Registry')
global.minecraft.SoundEvent = Java.loadClass('net.minecraft.sounds.SoundEvent')
global.minecraft.SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')
global.minecraft.UUIDUtil = Java.loadClass('net.minecraft.core.UUIDUtil')
if (IS_CLIENT_ENVIRONMENT) {
  global.minecraft.EntityBoundSoundInstance = Java.loadClass('net.minecraft.client.resources.sounds.EntityBoundSoundInstance')
  global.minecraft.MINECRAFT = Java.loadClass('net.minecraft.client.Minecraft')
}

global.jade = { }
if (IS_CLIENT_ENVIRONMENT) {
  global.jade.WailaClientRegistration = Java.loadClass('snownee.jade.impl.WailaClientRegistration')
  global.jade.WailaBlockAccessor = Java.loadClass('snownee.jade.api.BlockAccessor')
}

global.create = { }
global.create.SuperGlueSelectionHelper = Java.loadClass('com.simibubi.create.content.contraptions.glue.SuperGlueSelectionHelper')
if (IS_CLIENT_ENVIRONMENT) {
  global.create.CreateClient = Java.loadClass('com.simibubi.create.CreateClient')
  global.create.ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier')
  global.create.Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette')
  global.create.PonderPalette = Java.loadClass('com.simibubi.create.foundation.ponder.PonderPalette')
  global.create.PonderTagIndexScreen = Java.loadClass('com.simibubi.create.foundation.ponder.ui.PonderTagIndexScreen')
  global.create.TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier')
  global.create.ScreenOpener = Java.loadClass('com.simibubi.create.foundation.gui.ScreenOpener')
  global.create.SpecialTextures = Java.loadClass('com.simibubi.create.AllSpecialTextures')
  global.create.ParrotElement = Java.loadClass('com.simibubi.create.foundation.ponder.element.ParrotElement')
}
