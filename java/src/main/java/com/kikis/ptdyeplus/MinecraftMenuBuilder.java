package com.kikis.ptdyeplus;

import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.ContainerLevelAccess;

interface MinecraftMenuBuilder {
	AbstractContainerMenu create(int id, Inventory inventory, ContainerLevelAccess access);
}