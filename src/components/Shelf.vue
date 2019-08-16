<template>
    <div>
      <!-- <a href="#" id="drag">NKI Drag</a> -->
     <v-flex xs12>
        <v-flex ms4>
          <v-btn @click="on_walk_kontakt_dir">scan</v-btn>
        </v-flex>
        <v-flex ms4>
          <v-text-field v-model="kontakt_dir_1" label="kontakt dir:"></v-text-field>
        </v-flex>
      </v-flex> 
      <Instrument name="test.nki" ext=".nki" :tag_arr="['guitar','piano']" />

      <v-card class="mx-auto" min-width="300" >
        <v-list dense>
          <v-subheader>Instruments Shelf
              <v-breadcrumbs :items="nodes"></v-breadcrumbs>
          </v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-chip :draggable="true">{{item.ext}}</v-chip>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  large
                  v-text="item.filename"
                  v-on:dragstart="on_drag_nki($event,item)"
                  :draggable="true"
                  v-on:drop="drop($event,item)"
                  v-on:dragover="allowDrop($event)"
                ></v-list-item-title>

                <v-list-item-subtitle>
                  <v-chip x-small v-for="(tag, i) in item.tag_arr" :key="i">{{tag}}</v-chip>
                </v-list-item-subtitle>
              
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
</template>

<script src='./shelf/shelf.js'></script>
