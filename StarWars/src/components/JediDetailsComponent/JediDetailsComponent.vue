<template>
  <div >
  <v-list >
    <v-list-item-title>{{people.people}}</v-list-item-title>
    <v-list-item-subtitle>sdsdsd</v-list-item-subtitle>
  </v-list>
  </div>
</template>

<script lang="ts" setup>
import {usePeopleStore} from "@/store/peope";
const props = defineProps<{
  jediPeople: {[key: string]: string}
}>()

// const keysTranslationCharacter = {
//   birth_year: 'Data urodzenia',
// created: 'Stworzony',
// edited: 'Edytowany',
// eye_color: 'Kolor oczu';,
// films: string[];
// gender: string;
// hair_color: string;
// height: string;
// homeworld: string;
// mass: string;
// name: string;
// skin_color: string;
// species: string[];
// starships: string[];
// url: string;
// vehicles: string
// }

const people = usePeopleStore()
</script>

<style scoped>

</style>
