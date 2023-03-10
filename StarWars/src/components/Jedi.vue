<template>
  <v-container>
    <v-card-text>
    <h1 class="justify-center d-flex text-h1">CHARAKTERS</h1>
    </v-card-text>
  <div class="justify-center d-flex">
    <v-card-item>
      <a><v-list class=" text-h4" v-for="peopleData in people.people " :key="peopleData.name">{{peopleData.name}}</v-list></a>
    </v-card-item>
  </div>
  </v-container>
</template>

<script lang="ts" setup>
import {usePeopleStore} from "@/store/peope";

const people = usePeopleStore()
defineProps<{jediPeople: string}>()

</script>

<style scoped>

</style>
