<template>
  <v-app>
      <v-app-bar
        color="teal-darken-4"
      >
        <v-container class="justify-center d-flex">
          <v-btn class="mr-2" variant="tonal">HOME</v-btn>
          <v-btn class="mr-2" variant="tonal">CHARACTERS</v-btn>
          <v-btn variant="tonal">FILMS</v-btn>
        </v-container>
      </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "JediAppBar"
}
</script>

<style scoped>

</style>
