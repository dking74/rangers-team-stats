<template>
  <div class="team-year-search">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Model, Watch } from 'vue-property-decorator';

import { YEARS } from '../../constants';

@Component({})
export default class TeamYearSearch extends Vue {
  @Model('change', { type: Number }) readonly value!: number;

  selected = this.value || null;
  options = [
    { value: null, text: 'Please select some item' },
    ...YEARS,
  ];

  @Watch('value')
  valueChanged(value: number) {
    this.selected = value;
  }
  
  @Watch('selected')
  selectedChanged(selected: string) {
    this.$emit('change', selected);
  }
}
</script>