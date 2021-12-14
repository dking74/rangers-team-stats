<template>
  <div class="table">
    <b-table
      responsive
      outlined
      head-row-variant="primary"
      outline
      :small="compress || false"
      :table-class="tableClasses"
      :items="tableItems"
      :fields="tableFields"
    ></b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="items.length || 0"
      :per-page="numItemsPerPage"
      aria-controls="pitch-data-table-pagination"
      v-if="paginated"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class Table extends Vue {
  @Prop() items: Array<any>;
  @Prop() fields!: Array<any>;
  @Prop({ default: '' }) classes!: string;
  @Prop({ default: true }) sortableFields!: boolean;
  @Prop({ default: false }) paginated!: boolean;
  @Prop({ default: 10 }) numItemsPerPage!: number;
  @Prop({ default: false }) compress!: boolean;
  @Prop({ default: false }) stickyHeader!: boolean;

  currentPage = 1;
  tableItems: Array<any> = [];
  tableFields: Array<any> = [];
  tableClasses = this.classes || '';

  mounted() {
    this.updateTableElements();
  }

  paginateItems() {
    const startItemNum = (this.currentPage * this.numItemsPerPage) - this.numItemsPerPage;
    return this.items.slice(startItemNum, startItemNum + this.numItemsPerPage);
  }

  updateTableElements() {
    this.tableItems = !this.paginated
      ? (this.items || [])
      : this.paginateItems();
    this.tableFields = this.fields || this.tableItems.reduce<string[]>((prev: string[], curr: any) => {
        const fields = Object.keys(curr);
        fields.forEach((field: string) => !prev.includes(field) && prev.push(field)); 
        return prev;
      }, [])
      .map((field: string, index: number) => (
        {
          key: field,
          sortable: this.sortableFields && true ,
          stickyColumn: this.stickyHeader && index === 0,
        }
      ));
  }

  @Watch('currentPage')
  currentPageChanged() {
    this.updateTableElements();
  }
}
</script>