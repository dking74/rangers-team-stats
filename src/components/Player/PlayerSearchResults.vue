<template>
  <div class="player-search-results">
    <b-list-group class='text-left'>
      <b-list-group-item
        v-for="(player, i) in displayResults"
        :key="`${i}-${player.player_id}`"
        :href="`/players?player_id=${player.player_id}`"
        replace
      >
        <p v-html="`${player.name.replace(searchQuery, `<b>${searchQuery}</b>`)}<br>Age: ${player.age}  |  Height: ${player.height}  |  Weight: ${player.weight}lbs  |  Throws: ${player.throws}  |  Bats: ${player.bats}`"></p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { SearchPlayerResultsDTO } from '../../types/players';

@Component({})
export default class PlayerSearch extends Vue {
  @Prop(String) searchQuery: string;

  @State searchResults: Array<SearchPlayerResultsDTO>;

  get displayResults() {
    return this.searchResults.slice(0, 5);
  }
}
</script>

<style lang="scss">
.player-search-results a p {
  margin: 0;
}
</style>