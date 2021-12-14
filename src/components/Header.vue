<template>
  <h2 class="text-primary mb-3">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    }
  }
}
</script>