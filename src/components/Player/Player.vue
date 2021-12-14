<template>
  <div class="player-container mt-4 mb-4">
    <PlayerSearch v-model="searchQuery" />
    <PlayerSearchResults :searchQuery="searchQuery" />
    <PlayerProfile />
    <PlayerBattingStats />
    <PlayerPitchingStats />
    <PlayerBattingAverageStats />
    <PlayerPitchingAverageStats />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Mutation } from 'vuex-class';

import PlayerSearch from './PlayerSearch.vue';
import PlayerSearchResults from './PlayerSearchResults.vue';
import PlayerProfile from './Profile/PlayerProfile.vue';
import PlayerBattingStats from './Stats/PlayerBattingStats.vue';
import PlayerPitchingStats from './Stats/PlayerPitchingStats.vue';
import PlayerBattingAverageStats from './Stats/PlayerBattingAverageStats.vue';
import PlayerPitchingAverageStats from './Stats/PlayerPitchingAverageStats.vue';

import {
  PlayerDTO,
  PlayerStatAveragesDTO,
  PlayerYearResultDTO,
} from '../../types/players';

@Component({
  components: {
    PlayerSearch,
    PlayerSearchResults,
    PlayerProfile,
    PlayerBattingStats,
    PlayerPitchingStats,
    PlayerBattingAverageStats,
    PlayerPitchingAverageStats,
  }
})
export default class Player extends Vue {
  searchQuery = '';
  player: PlayerDTO = {} as PlayerDTO;

  @Action getCurrentPlayer: (playerId: number) => Promise<PlayerDTO>;
  @Action getCurrentPlayerStats: (playerId: number) => Promise<PlayerYearResultDTO>;
  @Action getCurrentPlayerStatAverages: (playerId: number) => Promise<PlayerStatAveragesDTO>;
  @Mutation setPageLoading: (loading: boolean) => void;

  mounted() {
    const { player_id } = this.$router.currentRoute.query;
    const playerId = parseInt(player_id as string);
    if (playerId && !isNaN(playerId)) {
      this.setPageLoading(true);
      Promise.all([
        this.getCurrentPlayer(playerId),
        this.getCurrentPlayerStats(playerId),
        this.getCurrentPlayerStatAverages(playerId),
      ]).finally(() => this.setPageLoading(false));
    }
  }
}
</script>

<style>

</style>