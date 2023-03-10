<template>
    <Jedi :jediPeople="jediPeople"/>
</template>

<script lang="ts" setup>
import Jedi from "@/components/Jedi.vue";
import {onMounted, ref} from "vue";
import axios, {create} from "axios";

const jediPeople = ref([])

onMounted(async () => {
  const  response = await axios.get('https://swapi.dev/api/people')

  jediPeople.value = response.data.results
})
</script>


<style scoped>

</style>
