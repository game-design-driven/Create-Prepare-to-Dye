//priority: 0
// Player Tweaks - player-related gameplay modifications

// Player invincibility - players cannot take damage except from void/kill
EntityEvents.hurt(function(event) {
  if (event.entity.player && !event.source.isBypassInvul()) {
    event.cancel();
  }
});
