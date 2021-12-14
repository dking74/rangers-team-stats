<template>
  <div class="batting-year-table" v-if="show">
    <Table :items="battingItems" :sortableFields="false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Table from '../Table.vue';

import { BatYearResultDTO, BatResult } from '../../types/default';

@Component({
  components: {
    Table
  }
})
export default class BattingAveragesTable extends Vue {
  @Prop() readonly stats!: BatResult;

  battingStats: BatResult = this.stats || {} as BatResult;

  get show(): boolean {
    return this.battingItems && this.battingItems.length > 0;
  }

  get battingItems() {
    const battingData: BatYearResultDTO = this.battingStats?.batting;
    console.log('Batting data: ', battingData);
    if (!battingData) return [];
    return [{
        G: battingData.games,
        PA: battingData.plate_appearances,
        AB: battingData.at_bats,
        BA: battingData.batting_average,
        OBP: battingData.obp,
        SLG: battingData.slg,
        OPS: battingData.ops,
        'OPS+': battingData.ops_plus,
        R: battingData.runs,
        H: battingData.hits,
        '2B': battingData.doubles,
        '3B': battingData.triples,
        HR: battingData.home_runs,
        TB: battingData.total_bases,
        RBI: battingData.rbis,
        BB: battingData.walks,
        K: battingData.strikeouts,
        SB: battingData.stolen_bases,
        CS: battingData.caught_stealing,
        GDP: battingData.gdp,
        HBP: battingData.hbp,
        SF: battingData.sacrifice_fly,
        IBB: battingData.ibb,
    }];
  }
}
</script>