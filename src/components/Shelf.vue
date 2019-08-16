<template>
  <v-container>
    <v-layout>
      <!-- <a href="#" id="drag">NKI Drag</a> -->
      <v-flex xs12>
        <v-text-field v-model="kontakt_dir_1" label="kontakt dir:"></v-text-field>
        <v-btn @click="on_walk_kontakt_dir">scan</v-btn>
      </v-flex>
      <v-card class="mx-auto" min-width="400" tile>
        <v-list dense>
          <v-subheader>Instruments Shelf</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon
                  v-text="item.filename"
                  v-on:dragstart="on_drag_nki($event,item.path)"
                  :draggable="true"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <!-- {{item.filename}} -->
                <!-- <a href="#" v-on:dragstart="on_drag_nki(event,item.path)">{{item.filename}}</a> -->
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script src='./shelf/shelf.js'>
</script>
