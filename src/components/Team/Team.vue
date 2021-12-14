<template>
  <div class="team-container mt-4 mb-4">
    <TeamYearSearch v-model="year" />
    <TeamLinks /><hr v-if="teamPersonnel && Object.keys(teamPersonnel).length > 0" />
    <TeamPersonnel /><hr v-if="teamResult && Object.keys(teamResult).length > 0" />
    <TeamResult /><hr v-if="teamRoster && Object.keys(teamRoster).length > 0" />
    <TeamRoster /><hr v-if="teamStats && Object.keys(teamStats).length > 0" />
    <TeamStats /><hr v-if="teamGames && teamGames.length > 0" />
    <TeamGames />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Mutation, State } from 'vuex-class';
import { Watch } from 'vue-property-decorator';

import TeamYearSearch from './TeamYearSearch.vue';
import TeamLinks from './TeamLinks.vue';
import TeamPersonnel from './TeamPersonnel.vue';
import TeamResult from './TeamResult.vue';
import TeamRoster from './TeamRoster.vue';
import TeamStats from './TeamStats.vue';
import TeamGames from './TeamGames.vue';

import { RosterByYearDTO } from '../../types/players';
import { GameDTO } from '../../types/games';
import {
  TeamResultDTO,
  TeamStatsDTO,
  TeamPersonnelDTO,
} from '../../types/teams';

@Component({
  components: {
    TeamYearSearch,
    TeamLinks,
    TeamPersonnel,
    TeamResult,
    TeamStats,
    TeamRoster,
    TeamGames,
  }
})
export default class Team extends Vue {
  year: number | null = null;
  loadingState = false;

  @Action getTeamRoster: (year: number) => Promise<RosterByYearDTO>;
  @Action getTeamResult: (year: number) => Promise<TeamResultDTO>;
  @Action getTeamStats: (year: number) => Promise<TeamStatsDTO>;
  @Action getTeamPersonnel: (year: number) => Promise<TeamPersonnelDTO>;
  @Action getTeamGames: (year: number) => Promise<GameDTO[]>;

  @Mutation setPageLoading: (loading: boolean) => void;

  @State teamPersonnel: TeamPersonnelDTO;
  @State teamResult: TeamResultDTO;
  @State teamRoster: RosterByYearDTO;
  @State teamStats: TeamStatsDTO;
  @State teamGames: GameDTO[];

  mounted() {
    const year = this.year;
    if (year && !this.loadingState) this.getTeamData(year);
  }

  getTeamData(year: number) {
    this.setPageLoading(true);
    this.loadingState = true;
    Promise.all([
      this.getTeamPersonnel(year),
      this.getTeamRoster(year),
      this.getTeamResult(year),
      this.getTeamStats(year),
      this.getTeamGames(year),
    ]).finally(() => {
        this.loadingState = false;
        this.setPageLoading(false)
    });
  }

  @Watch('year')
  yearChanged(year: string) {
    const { year: pathYear } = this.$route.query;
    if (year && pathYear != year) {
      return this.$router.replace(`/teams?year=${year}`)
    }
  }

  @Watch('$route.query.year', { immediate: true, deep: true })
  queryYearChanged(queryPathYear: string) {
    const parsedYear = parseInt(queryPathYear);
    this.year = parsedYear || null;
    if (!isNaN(parsedYear)) {
      this.getTeamData(parsedYear);
    }
  }
}
</script>

<style>

</style>