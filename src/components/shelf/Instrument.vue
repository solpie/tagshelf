<template>
  <v-card>
    <v-chip>{{ext}}</v-chip>
    {{name}}
    <v-chip v-for="(tag, i) in tag_arr" :key="i">{{tag}}</v-chip>
  </v-card>
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