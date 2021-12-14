<template>
  <div id="team-roster" class="team-roster-container text-left mt-4 mb-4" v-if="show">
    <Header title="Team Roster" />
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

import { PlayerDTO, RosterByYearDTO } from '../../types/players';

@Component({
  components: {
    Header,
    Table,
  }
})
export default class TeamRoster extends Vue {
  @State teamRoster: RosterByYearDTO;

  get show(): boolean {
    return this.teamRoster && this.teamRoster.length > 0;
  }

  get items() {
    return this.teamRoster.map((player: PlayerDTO) => {
      const { player_id, logo, first_name, last_name, ...playerDetails } = player;
      const name = `${first_name} ${last_name}`;
      return {
        name,
        ...playerDetails,
      }
    });
  }
}
</script>

<style>

</style>