<template>
  <b-navbar type="light" variant="light" sticky>
    <b-navbar-brand href="/">
      <img src="/Texas-Rangers-Logo.png" width="50" />
      <label class="ml-3 text-secondary font-weight-bold">Rangers Stats Portal</label>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarBrand } from 'bootstrap-vue';

export default {
  components: {
    BNavbar,
    BNavbarBrand,
  },
}
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, .25);

  .navbar-brand {
    padding: 0;
  }
}
</style>