<template>
  <div id="team-games" class="team-games-container text-left mt-4 mb-4" v-if="show">
    <Header title="Team Games" />
    <Table
      :items="items"
      :paginated="true"
      :compress="true"
      :stickyHeader="true"
      :numItemsPerPage="5"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../Header.vue';
import Table from '../Table.vue';

import { GameDTO } from '../../types/games';

@Component({
  components: {
    Header,
    Table,
  }
})
export default class TeamRoster extends Vue {
  @State teamGames: GameDTO[];

  get show(): boolean {
    return this.teamGames && this.teamGames.length > 0;
  }

  get items() {
    return this.teamGames.map((game: GameDTO) => {
      const { game_id, year, ...gameDetails } = game;
      return gameDetails;
    });
  }
}
</script>

<style>

</style>