<template>
  <div id="team-stats" class="team-stats-container text-left mt-4 mb-3" v-if="show">
    <Header title="Team Stats" />
    <!-- Hitting Stats -->
    <h5 class="text-secondary">Hitting</h5>
    <BattingAveragesTable :stats="teamStats" />

    <!-- Pitching Stats -->
    <h5 class="text-secondary mt-4">Pitching</h5>
    <PitchingAveragesTable :stats="teamStats" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../Header.vue';
import BattingAveragesTable from '../SharedStatTables/BattingAveragesTable.vue';
import PitchingAveragesTable from '../SharedStatTables/PitchingAveragesTable.vue';

import { TeamStatsDTO } from '../../types/teams';

@Component({
  components: {
    Header,
    BattingAveragesTable,
    PitchingAveragesTable,
  }
})
export default class TeamStats extends Vue {
  @State teamStats: TeamStatsDTO;

  get show(): boolean {
    return this.teamStats && Object.keys(this.teamStats).length > 0;
  }

  get battingStats() {
    return this.teamStats?.batting || [];
  }

  get pitchingStats() {
    return this.teamStats?.pitching || [];
  }
}
</script>

<style>

</style>