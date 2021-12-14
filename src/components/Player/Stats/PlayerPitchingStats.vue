<template>
  <div class="mt-5 text-left" v-if="showStats">
    <Header title="Yearly Pitching Stats"></Header>
    <PitchingYearTable :stats="currentPlayerStats" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../../Header.vue';
import PitchingYearTable from '../../SharedStatTables/PitchingYearTable.vue';

import {
  PlayerYearResult,
  PlayerYearResultDTO,
} from '../../../types/players';

@Component({
  components: {
    Header,
    PitchingYearTable,
  },
})
export default class PlayerBattingStats extends Vue {
  @State currentPlayerStats: PlayerYearResultDTO;

  get showStats(): boolean {
    return (
      Object.keys(this.currentPlayerStats).length > 0 &&
      Object.values(this.currentPlayerStats).some((val: PlayerYearResult) => {
        const { pitching } = val;
        return pitching;
      })
    );
  }
}
</script>

<style>

</style>