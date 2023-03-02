<template>
  <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <div v-for="peopleData in jediPeople" :key="peopleData.name">{{peopleData.name}}</div>
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
        </div>
        <div class="text-overline mb-1">
          OVERLINE
        </div>
        <div class="text-h6 mb-1">
          Headline
        </div>
        <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn variant="outlined">
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import axios, {create} from "axios";
import {people} from "@/types/peopleType";

const jediPeople = ref([])

onMounted(async () => {
  const  response = await axios.get('https://swapi.dev/api/people')
  jediPeople.value = response.data.results
})
console.log(jediPeople)
</script>

<style scoped>

</style>
