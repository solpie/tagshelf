<template>
  <v-layout>
    <Tag />
    <Shelf />
  </v-layout>
</template>

<script>
import Shelf from "../components/Shelf";
import Tag from "../components/Tag";
export default {
  components: {
    Tag,
    Shelf
  }
};
</script>
