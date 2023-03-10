<template>
<v-card>
  {{$route.params.id}}
  <table>
    <tbody>
    <tr v-for="(info, index) in people.people" :key="index">
      <td>{{ info.name }}</td>
      <td>{{ info.gender}}</td>
      <td>{{ info.birth_year}}</td>
      <td>{{ info.eye_color}}</td>
      <td>{{ info.mass}}</td>
    </tr>
    </tbody>
  </table>
</v-card>
</template>

<script lang="ts" setup>
import {usePeopleStore} from "@/store/peope";


const people = usePeopleStore()
</script>

<style scoped>

</style>
