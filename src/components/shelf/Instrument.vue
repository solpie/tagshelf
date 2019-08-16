<template>
  <div class="text-center">
    <v-chip>{{ext}}</v-chip>
    {{name}}
    <v-chip small v-for="(tag, i) in tag_arr" :key="i">{{tag}}</v-chip>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    ext: String,
    tag_arr: Array
  }
};
</script>

<style>
</style>