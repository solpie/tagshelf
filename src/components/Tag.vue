<template>
  <v-expansion-panels accordion small class="square" :multiple="true" min-width="200">
    <v-expansion-panel class="square" v-for="(item,i) in categories" :key="i" max-height="40">
      <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-chip-group multiple column active-class="primary--text">
          <v-chip
            v-for="(tag,i) in item.tag_arr"
            :key="i"
            draggable
            :ripple="false"
            small
            v-on:dragstart="on_drag_tag($event,tag)"
          >{{tag}}</v-chip>
        </v-chip-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script src='./tag/tag.js'></script>
