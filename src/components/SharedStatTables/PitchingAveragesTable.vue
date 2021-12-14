<template>
  <div class="batting-year-table" v-if="show">
    <Table :items="pitchingItems" :sortableFields="false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Table from '../Table.vue';

import { PitchYearResultDTO } from '../../types/default';

type PitchResult = { pitching: PitchYearResultDTO };

@Component({
  components: {
    Table
  }
})
export default class PitchingAveragesTable extends Vue {
  @Prop() readonly stats!: PitchResult;

  pitchingStats: PitchResult = this.stats || {} as PitchResult;

  get show(): boolean {
    return this.pitchingItems && this.pitchingItems.length > 0;
  }

  get pitchingItems() {
    const pitchingData: PitchYearResultDTO = this.pitchingStats?.pitching;
    if (!pitchingData) return [];
    return [{
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
    }];
  }
}
</script>