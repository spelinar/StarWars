<template>
<div>
  <div v-for="(value, index) in store.people" :key="index">
    <span @click="goToIdPage(value.url)">{{value.name}}</span>
   </div>
</div>
</template>

<script lang="ts" setup>

import {usePeopleStore} from "@/store/peope";
import {useRouter} from "vue-router";
const router = useRouter();

const store = usePeopleStore()
function getIdUrl(url: string): string {
  const urlParts = url.split('/')
  console.log('urlParts',urlParts)
  return urlParts[urlParts.length -1]
}
async function goToIdPage(url: string) {
  console.log('url', url)
  const id = getIdUrl(url)
  console.log('id', id)
  await router.push({ path: `/characters/${id}` })
}



</script>

<style scoped>

</style>
