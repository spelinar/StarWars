import {defineStore} from "pinia";
import axios from 'axios'
import {ref} from "vue";

export const useSwapiStore = defineStore('swapi',() => {
  const people = ref([])
  async function jediData() {
    const response = await axios.get('https://swapi.dev/api/people')
    people.value = response.data.results
  }
})
