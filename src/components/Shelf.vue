<template>
  <v-container>
    <v-layout>
      <a href="#" id="drag">NKI Drag out</a>
    </v-layout>
  </v-container>
</template>

<script>
const ipcRenderer = require('electron').ipcRenderer;
export default {
  data: () => ({}),
  mounted: () => {
    document.getElementById("drag").ondragstart = event => {
      event.preventDefault();
      ipcRenderer.send("ondragstart", "C:\\test.nki");
    };
  }
};
</script>
