<template>
  <div class="table">    
    <b-table
      responsive
      outlined
      head-row-variant="primary"
      outline
      :table-class="tableClasses"
      :items="tableItems"
      :fields="tableFields"
    ></b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="items.length || 0"
      :per-page="numItemsPerPage"
      aria-controls="pitch-data-table-pagination"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Table extends Vue {
  @Prop() items!: Array<any>;
  @Prop() fields!: Array<any>;
  @Prop({ default: '' }) classes!: string;
  @Prop({ default: true }) sortableFields!: boolean;
  @Prop({ default: false }) paginated!: boolean;
  @Prop({ default: 10 }) numItemsPerPage!: number;

  tableItems = this.items || [];
  tableFields = this.fields || this.items.reduce<string[]>((prev: string[], curr: any) => {
      const fields = Object.keys(curr);
      fields.forEach((field: string) => !prev.includes(field) && prev.push(field)); 
      return prev;
    }, [])
    .map((field: string) => ({ key: field, sortable: this.sortableFields && true  }));
  tableClasses = this.classes || '';
  currentPage = 1;
}
</script>

<style>

</style>