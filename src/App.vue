<template>
  <div id="app" class="border-primary">
    <Loader :showLoader="pageLoading">
      <NavBar />
      <Tabs :active-tab="activeTab" />
    </Loader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import { State } from 'vuex-class';

import Loader from './components/Loader.vue';
import NavBar from './components/NavBar.vue';
import Tabs from './components/Tabs.vue';

@Component({
  components: {
    Loader,
    NavBar,
    Tabs,
  },
})
export default class App extends Vue {
  activeTab = 'player';
  @State pageLoading: boolean;

  mounted() {
    const path = this.$router.currentRoute.path;
    (path === '/teams') ? this.activeTab = 'team' : this.activeTab = 'player';
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
