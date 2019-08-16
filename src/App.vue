<template>
  <v-app>
    <v-navigation-drawer permanent width="100%">
      <v-row class="fill-height">
        <v-navigation-drawer dark mini-variant mini-variant-width="45" permanent>
          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" @click>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <router-view />
        </v-content>
      </v-row>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  })
};
</script>
