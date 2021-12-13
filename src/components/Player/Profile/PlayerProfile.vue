<template>
  <div class="player-profile mt-5" v-if="playerDefined">
    <!-- {{ currentPlayerInfo }}
    {{ currentPlayerStats }}
    {{ currentPlayerStatAverages }} -->
    <div class="text-center mb-3">
      <b-avatar size="64px" variant="info" :src="playerLogo"></b-avatar>
    </div>
    <PlayerInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import PlayerInfo from './PlayerInfo.vue';

import {
  PlayerDTO,
  // PlayerStatAveragesDTO,
  // PlayerYearResultDTO,
} from '../../../types/players';

@Component({
  components: {
    PlayerInfo,
  }
})
export default class PlayerProfile extends Vue {
  @State currentPlayerInfo: PlayerDTO;
  // @State currentPlayerStats: PlayerYearResultDTO;
  // @State currentPlayerStatAverages: PlayerStatAveragesDTO;

  get playerDefined() {
    return Object.keys(this.currentPlayerInfo).length > 0;
  }

  get playerLogo(): string {
    return (
      this.currentPlayerInfo.logo ||
      'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/{imgid}/headshot/67/current'
    );
  }
}
</script>

<style>

</style>