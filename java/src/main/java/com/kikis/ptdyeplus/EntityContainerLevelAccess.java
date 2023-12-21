package com.kikis.ptdyeplus;

import net.minecraft.MethodsReturnNonnullByDefault;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.inventory.ContainerLevelAccess;
import net.minecraft.world.level.Level;

import javax.annotation.ParametersAreNonnullByDefault;
import java.util.Optional;
import java.util.function.BiFunction;

@ParametersAreNonnullByDefault
@MethodsReturnNonnullByDefault
public class EntityContainerLevelAccess implements ContainerLevelAccess {
	private final Entity entity;

	public EntityContainerLevelAccess(Entity entity) {
		this.entity = entity;
	}

	@Override
	public <T> Optional<T> evaluate(BiFunction<Level, BlockPos, T> func) {
		return Optional.ofNullable(func.apply(entity.level, entity.blockPosition()));
	}
}