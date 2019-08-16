<template>
  <v-expansion-panels accordion small>
    <v-expansion-panel v-for="(item,i) in categories" :key="i">
      <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-chip
          v-for="(tag,i) in item.tag_arr"
          :key="i"
          class="ma-2"
          color="teal"
          draggable
          text-color="white"
          v-on:dragstart="on_drag_tag($event,tag)"
        >
          {{tag}}
          <!-- {{tag}} -->
          <!-- <v-label :draggable="true"></v-label> -->
        </v-chip>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script src='./tag/tag.js'></script>
