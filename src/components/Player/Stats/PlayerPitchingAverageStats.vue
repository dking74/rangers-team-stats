<template>
  <div class="mt-5 text-left" v-if="showStats">
    <Header title="Average Pitching Stats"></Header>
    <PitchingAveragesTable :stats="currentPlayerStatAverages" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../../Header.vue';
import PitchingAveragesTable from '../../SharedStatTables/PitchingAveragesTable.vue';

import {
  PlayerStatAveragesDTO,
} from '../../../types/players';

@Component({
  components: {
    Header,
    PitchingAveragesTable,
  },
})
export default class PlayerPitchingAverageStats extends Vue {
  @State currentPlayerStatAverages: PlayerStatAveragesDTO;

  get showStats(): boolean {
    return (
      this.currentPlayerStatAverages.pitching && 
      Object.keys(this.currentPlayerStatAverages.pitching).length > 0
    );
  }
}
</script>

<style>

</style>