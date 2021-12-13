<template>
  <div class="player-container mt-4">
    <PlayerSearch v-model="searchQuery" />
    <PlayerSearchResults :searchQuery="searchQuery" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import PlayerSearch from './PlayerSearch.vue';
import PlayerSearchResults from './PlayerSearchResults.vue';

@Component({
  components: {
    PlayerSearch,
    PlayerSearchResults,
  }
})
export default class Player extends Vue {
  searchQuery = '';
}
</script>

<style>

</style>