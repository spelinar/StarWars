<template>
  <v-container>
    <v-card-text>
      <h1 class="justify-center d-flex text-h1">FILMS</h1>
    </v-card-text>
    <div class="justify-center d-flex">
      <v-card-item>
<!--        <a><v-list class=" text-h4" v-for="filmData in jediFilms" :key="filmData.title">{{filmData.title}}</v-list></a>-->
        <a><v-list class=" text-h4" v-for="filmData in films.films" :key="filmData.title">{{filmData.title}}</v-list></a>

      </v-card-item>
    </div>
  </v-container>
</template>

<script lang="ts" setup>

import {filmJedi} from "@/types/Type";
import {useSwapiFilmsStore} from "@/store/peope";
const films = useSwapiFilmsStore()
defineProps<{ jediFilms: filmJedi }>()

</script>

<style scoped>

</style>
