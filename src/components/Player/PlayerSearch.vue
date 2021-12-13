<template>
  <div class="player-search w-100">
    <b-input-group>
      <b-form-input
        id="player-search-input"
        placeholder="Search for player..."
        v-model="currentValue"
        @keyup.enter="submitSearchOfPlayer"
      ></b-form-input>
      <b-input-group-append is-text @click="submitSearchOfPlayer">
        <b-icon icon="search"></b-icon>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action, Mutation } from 'vuex-class';
import Component from 'vue-class-component';
import { Watch, Model } from 'vue-property-decorator';

import { SearchPlayerResultsDTO } from '../../types/players'; 

@Component({})
export default class PlayerSearch extends Vue {
  @Model('input', { type: String }) readonly value!: string;

  timer: any;
  loading = false;
  currentValue = this.value || '';

  @Mutation setSearchResults: (s: SearchPlayerResultsDTO) => void;
  @Action getPlayerSearchResults: (v: string) => Promise<SearchPlayerResultsDTO>;

  mounted() {
    this.setSearchResults([]);
  }

  submitSearchOfPlayer(): void {
    if (this.currentValue && !this.loading)
      this.searchForPlayer();
  }

  searchForPlayer() {
    this.loading = true;
    this.getPlayerSearchResults(this.currentValue)
      .finally(() => (this.loading = false));
  }

  searchTimeOut() {  
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.currentValue) {
      this.timer = setTimeout(() => {
        this.searchForPlayer();
      }, 100);
    }
  }

  @Watch('currentValue')
  valueChanged(value: string) {
    this.$emit('input', value);
    value
      ? this.searchTimeOut()
      : this.setSearchResults([]);
  }
}
</script>

<style lang="scss">
.input-group-append {
  &:hover {
    cursor: pointer;
  }
}
</style>