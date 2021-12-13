<template>
  <div class="player-profile mt-5">
    {{ currentPlayerInfo }}
    {{ currentPlayerStats }}
    {{ currentPlayerStatAverages }} 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import {
  PlayerDTO,
  PlayerStatAveragesDTO,
  PlayerYearResultDTO,
} from '../../../types/players';


@Component({})
export default class PlayerProfile extends Vue {
  @State currentPlayerInfo: PlayerDTO;
  @State currentPlayerStats: PlayerYearResultDTO;
  @State currentPlayerStatAverages: PlayerStatAveragesDTO;
}
</script>

<style>

</style>