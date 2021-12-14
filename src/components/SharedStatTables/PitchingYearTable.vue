<template>
  <div class="batting-year-table" v-if="show">
    <Table :items="pitchingItems" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Table from '../Table.vue';

import { PitchYearResultDTO } from '../../types/default';

type PitchYearResult = {
  [year: number]: {
    pitching: PitchYearResultDTO;
  }
};

@Component({
  components: {
    Table
  }
})
export default class PitchingYearTable extends Vue {
  @Prop() readonly stats!: PitchYearResult;
  
  pitchingYearStats: PitchYearResult = this.stats || {} as PitchYearResult;

  get show(): boolean {
    return this.pitchingItems && this.pitchingItems.length > 0;
  }

  get pitchingItems(): Array<any> {
    return Object.keys(this.pitchingYearStats)
      .filter((year: string) => {
        const numYear = parseInt(year);
        const pitchingResultData: PitchYearResultDTO = this.pitchingYearStats[numYear].pitching;
        return pitchingResultData !== null && Object.keys(pitchingResultData).length !== 0;
      })
      .map((year: string) => {
        const numYear = parseInt(year);
        const pitchingData: PitchYearResultDTO = this.pitchingYearStats[numYear].pitching;
        return {
            year: parseInt(year),
            G: pitchingData.games,
            GS: pitchingData.games_started,
            IP: pitchingData.innings_pitched,
            W: pitchingData.wins,
            L: pitchingData.losses,
            S: pitchingData.saves,
            'W%': pitchingData.win_percentage,
            ERA: pitchingData.era,
            'ERA+': pitchingData.era_plus,
            FIP: pitchingData.fip,
            WHIP: pitchingData.whip,
            BB: pitchingData.walks,
            K: pitchingData.strikeouts,
            H: pitchingData.hits,
            R: pitchingData.runs,
            ER: pitchingData.earned_runs,
            HR: pitchingData.home_runs,
            CG: pitchingData.complete_games,
            SH: pitchingData.shutouts,
            Balks: pitchingData.balks,
            WP: pitchingData.wild_pitches,
            IBB: pitchingData.intentional_walks,
            'H/9': pitchingData.hits_per_9,
            'BB/9': pitchingData.bb_per_9,
            'K/9': pitchingData.k_per_9,
        };
      });
  }
}
</script>