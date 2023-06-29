<template>
  <h1>{{ title }}</h1>
  <ph-umbrella :size="60" />
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: 'page2.vue'
    }
  }
}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>