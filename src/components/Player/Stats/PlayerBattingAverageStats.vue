<template>
  <div class="mt-5 text-left" v-if="showStats">
    <Header title="Average Batting Stats"></Header>
    <BattingAveragesTable :stats="currentPlayerStatAverages" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../../Header.vue';
import BattingAveragesTable from '../../SharedStatTables/BattingAveragesTable.vue';

import {
  PlayerStatAveragesDTO,
} from '../../../types/players';

@Component({
  components: {
    Header,
    BattingAveragesTable,
  },
})
export default class PlayerBattingAverageStats extends Vue {
  @State currentPlayerStatAverages: PlayerStatAveragesDTO;

  get showStats(): boolean {
    return (
      this.currentPlayerStatAverages.batting &&
      Object.keys(this.currentPlayerStatAverages).length > 0
    );
  }
}
</script>

<style>

</style>