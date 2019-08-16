<template>
  <v-container>
    <v-layout>
      <!-- <a href="#" id="drag">NKI Drag</a> -->
      <v-flex xs12>
        <v-text-field v-model="kontakt_dir_1" label="kontakt dir:"></v-text-field>
        <v-btn @click="on_walk_kontakt_dir">scan</v-btn>
      </v-flex>
      <v-card class="mx-auto" min-width="800" tile>
        <v-list dense>
          <v-subheader>Instruments Shelf</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.filename"
                  v-on:dragstart="on_drag_nki($event,item.path)"
                  :draggable="true"
                  v-on:drop="drop($event,item)"
                  v-on:dragover="allowDrop($event)"
                ></v-list-item-title>
                 

                <v-list-item-subtitle>
                   <v-clip v-for="(tag, i) in item.tag_arr" :key="i">{{tag}},</v-clip>
                </v-list-item-subtitle>
                <!-- <a href="#" v-on:dragstart="on_drag_nki(event,item.path)">{{item.filename}}</a> -->
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script src='./shelf/shelf.js'></script>
