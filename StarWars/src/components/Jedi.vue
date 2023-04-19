<template>
  <v-container>
    <v-card-text>
    <h1 class="justify-center d-flex text-h1">CHARAKTERS</h1>
    </v-card-text>
  <div class="justify-center d-flex">
    <v-card-item>
      <v-list>{{}}</v-list>
      <v-list class=" text-h4" v-for="peopleData in people.people " :key="peopleData.id" @click="goToDetails(peopleData.id)">{{peopleData.name}}</v-list>
    </v-card-item>
  </div>
  </v-container>
</template>

<script lang="ts" setup>
import {usePeopleStore} from "@/store/peope";
const people = usePeopleStore()

</script>

<style scoped>

</style>
