<template>
  <div class="batting-year-table" v-if="show">
    <Table :items="battingItems" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Table from '../Table.vue';

import { BatYearResultDTO, BatYearResult } from '../../types/default';

@Component({
  components: {
    Table
  }
})
export default class BattingYearTable extends Vue {
  @Prop() readonly stats!: BatYearResult;

  battingYearStats: BatYearResult = this.stats || {} as BatYearResult;

  get show(): boolean {
    return this.battingItems && this.battingItems.length > 0;
  }

  get battingItems(): Array<any> {
    return Object.keys(this.battingYearStats)
      .filter((year: string) => {
        const numYear = parseInt(year);
        const batResultData: BatYearResultDTO = this.battingYearStats[numYear].batting;
        return batResultData !== null && Object.keys(batResultData).length !== 0;
      })
      .map((year: string) => {
        const numYear = parseInt(year);
        const battingData: BatYearResultDTO = this.battingYearStats[numYear].batting;
        return {
          year: parseInt(year),
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
        };
      });
  }
}
</script>