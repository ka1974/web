<template>
  <h1>{{ title }}</h1>
  <ph-sun :size="60" />
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: 'page1.vue'
    }
  }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>