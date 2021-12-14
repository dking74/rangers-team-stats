<template>
  <div id="team-result" class="team-result-container text-left mt-4 mb-3" v-if="show">
    <Header title="Team Year Result" />
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="4" class="p-0">
          <!-- Record label -->
          <div class="team-result__section">
            <label class="team-result--title">Record:</label>
            <label>{{ record }}</label>
          </div>
          <!-- Division Place label -->
          <div class="team-result__section">
            <label class="team-result--title">Division Place:</label>
            <label>{{ division_place }}</label>
          </div>
          <!-- Attendance label -->
          <div class="team-result__section">
            <label class="team-result--title">Total Attendance:</label>
            <label>{{ attendance }}</label>
          </div>
          <!-- Attendance / game label -->
          <div class="team-result__section">
            <label class="team-result--title">Attendance / Game:</label>
            <label>{{ attendance_per_game }}</label>
          </div>
        </b-col>
        <b-col cols="12" sm="8" class="p-0" v-if="postseason.length > 0">
          <div class="team-result__postseason team-result__section">
            <label class="team-result--title">Postseason:</label>
            <label
              v-for="series in postseason"
              :key="series.name"
              class="d-block"
              v-html="`<b>${series.name}</b> vs. ${series.opponent} (<b>${series.result}</b>)`"
            >
            </label>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../Header.vue';
import Table from '../Table.vue';

import { TeamPostseasonResultDTO, TeamResultDTO } from '../../types/teams';

@Component({
  components: {
    Header,
    Table,
  }
})
export default class TeamResult extends Vue {
  @State teamResult: TeamResultDTO;

  get show(): boolean {
    return this.teamResult && Object.keys(this.teamResult).length > 0;
  }

  get record(): string {
    return `${this.teamResult?.wins}-${this.teamResult?.losses}-${this.teamResult?.ties}`;
  }

  get division_place(): number {
    return this.teamResult?.division_place;
  }

  get attendance(): number {
    return this.teamResult?.attendance;
  }

  get attendance_per_game(): string {
    return (this.attendance / (this.teamResult.wins + this.teamResult.losses + this.teamResult.ties)).toFixed(2);
  }

  get postseason(): Array<any> {
    const season: Array<TeamPostseasonResultDTO> = this.teamResult?.postseason;
    if (!season || season.length === 0) return [];
    return season?.map((post: TeamPostseasonResultDTO) => {
      return {
        result: post.result === 'loss' ? 'L' : 'W',
        name: post.series_name,
        opponent: post.opponent
      }
    }) || [];
  }
}
</script>

<style lang="scss">
.team-result {
  &__section {
    margin-bottom: 10px;
    label {
      margin: 0;
      padding: 0;
      display: block;
    }
  }
  &__postseason label:not(.team-result--title) {
    display: list-item !important;
    list-style-type: disc;
    list-style-position: inside;
  }
  &--title {
    font-weight: bold;
    max-width: 200px;
  }
}
</style>