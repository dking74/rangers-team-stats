<template>
  <div class="page-loader">
    <b-overlay :show="showLoader" rounded="lg">
      <slot />
    </b-overlay>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Loader extends Vue {
  @Prop() showLoader: boolean;
}
</script>

<style lang="scss">
.page-loader {
  height: 100%;
  
  .b-overlay-wrap {
    height: 100%;
  }
}
</style>