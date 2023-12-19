package com.kikis.ptdyeplus;

import com.mojang.brigadier.Command;
import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.logging.LogUtils;

import net.minecraft.commands.CommandSourceStack;
import net.minecraft.commands.Commands;
import net.minecraft.network.chat.Component;
import net.minecraft.world.MenuProvider;
import net.minecraft.world.SimpleMenuProvider;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.StonecutterMenu;

import com.kikis.ptdyeplus.PtdyePlus;

public class OpenStonecutter {
	
    public static void register(CommandDispatcher<CommandSourceStack> dispatcher){
        dispatcher.register(Commands.literal("openStonecutter").executes((command) -> {
            return execute(command);
        }));
    }
    
    private static int execute(CommandContext<CommandSourceStack> command){
        if(command.getSource().getEntity() instanceof Player){
            Player player = (Player) command.getSource().getEntity();
            player.openMenu(getMenuProvider());
        	LogUtils.getLogger().info("Opened stonecutter gui");
        }
        return Command.SINGLE_SUCCESS;
    }
    
    public static MenuProvider getMenuProvider() {
    	MinecraftMenuBuilder builder = (a,b,c)->new StonecutterMenu(a,b,c) {
    		@Override
			public boolean stillValid(Player player) {
				return true;
			}
    	};
        
        MenuProvider menuProvider = new SimpleMenuProvider(
				(id, inv, player) -> builder.create(id, inv, new EntityContainerLevelAccess(player)),
				Component.translatable("Personal Assembler")
		);
        
        return menuProvider;
        
    }
}