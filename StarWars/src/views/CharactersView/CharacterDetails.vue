<template>
  <div>test</div>
<!--  <div v-for="(value, index) in store.people" :key="index">{{value.name}}</div>-->
</template>

<script lang="ts" setup>
import {usePeopleStore} from "@/store/peope";


const store = usePeopleStore()

</script>

<style scoped>

</style>
