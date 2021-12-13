<template>
  <div class="player-team-toggler w-75 mx-auto mt-4">
    <b-tabs
      content-class="mt-3 border-none"
      align="center"
      active-nav-item-class="bg-primary text-white"
      fill
    >
      <b-tab title="Players" @click="clickedTabRoute('players')" :active="activeTab === 'player'"><Player /></b-tab>
      <b-tab title="Team" @click="clickedTabRoute('teams')" :active="activeTab === 'team'"></b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import Router from '../router';

import Player from './Player/Player.vue';

@Component({
  components: {
    Player,
  }
})
export default class Tabs extends Vue {
  @Prop(String) activeTab: string;
  @Mutation clearCurrentData: () => void;

  clickedTabRoute(path: string) {
    if (this.$router.currentRoute.path !== `/${path}`) {
      this.$router.replace(`/${path}`);
      this.clearCurrentData();
    }
  }
}
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