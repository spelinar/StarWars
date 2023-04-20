<template>
  <v-app>
      <v-app-bar
        color="teal-darken-4"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab  @click="goToCharacters">Tab 1</v-tab>

            <v-tab>Tab 2</v-tab>

            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    <v-main>
      <v-container>
        <router-view>

        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

import router from "@/router";

function goToCharacters() {
  router.push({path: '/characters'})
}

</script>

<style scoped>

</style>
