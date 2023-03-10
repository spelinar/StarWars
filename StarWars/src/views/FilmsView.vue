<template>
<films-component :jediFilms="jediFilms"/>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import FilmsComponent from "@/components/FilmsComponent.vue";

const jediFilms = ref([])

onMounted(async () => {
  const response = await axios.get('https://swapi.dev/api/films/')
  jediFilms.value = response.data.results
})
</script>

<style scoped>

</style>
