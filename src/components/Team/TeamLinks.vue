<template>
  <div class="team-links mt-4 mb-5">
    <h4 class="mb1 text-primary">Skip to Section</h4>
    <b-list-group>
        <b-list-group-item href="#team-personnel">Management & Coaches</b-list-group-item>
        <b-list-group-item href="#team-roster">Roster</b-list-group-item>
        <b-list-group-item href="#team-results">Results</b-list-group-item>
        <b-list-group-item href="#team-stats">Stats</b-list-group-item>
        <b-list-group-item href="#team-games">Games</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class TeamLinks extends Vue {}
</script>

<style lang="scss">
.list-group {
  border: none;
  a {
    border: none;
    padding: 1px;
    color: #003278;
  }
}
</style>