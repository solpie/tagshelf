<template>
  <v-card class="d-inline-flex pa-0 fill-height" outlined tile max-width="800">
    <v-flex xs4>
      <Tag />
    </v-flex>
    <v-flex xs6>
      <Shelf />
    </v-flex>
  </v-card>
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
