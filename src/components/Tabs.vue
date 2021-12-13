<template>
  <div class="player-team-toggler w-75 mx-auto mt-3">
    <b-tabs
      content-class="mt-3 w-100 border-none"
      align="center"
      active-nav-item-class="bg-primary text-white"
      fill
    >
      <b-tab title="Players" @click="$router.replace('/')"><Player /></b-tab>
      <b-tab title="Team" @click="$router.replace('/')"></b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Player from './Player/Player.vue';

@Component({
  components: {
    Player,
  }
})
export default class Tabs extends Vue { }
</script>

<style lang="scss">
@import "../scss/variables";

.nav-tabs .nav-link {
  box-shadow: 0 0 1px 1px rgba($primary, .25);

  &:hover {
    background-color: rgba($primary, .1);
  }
}
</style>