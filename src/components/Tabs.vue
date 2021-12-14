<template>
  <div class="player-team-toggler w-75 mx-auto py-4">
    <b-tabs
      content-class="mt-3 border-none"
      align="center"
      active-nav-item-class="bg-primary text-white"
      fill
    >
      <b-tab title="Players" @click="clickedTabRoute('players')" :active="activeTab === 'player'"><Player /></b-tab>
      <b-tab title="Team" @click="clickedTabRoute('teams')" :active="activeTab === 'team'"><Team /></b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import Player from './Player/Player.vue';
import Team from './Team/Team.vue';

@Component({
  components: {
    Player,
    Team,
  }
})
export default class Tabs extends Vue {
  @Prop(String) activeTab: string;
  @Mutation clearCurrentData: () => void;

  clickedTabRoute(path: string) {
    // Navigate if the path has changed or
    // if the path has query params and we want to go
    // back to the base path.
    if (
      this.$route.path != `/${path}` ||
      Object.keys(this.$route.query).length > 0
    ) {
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