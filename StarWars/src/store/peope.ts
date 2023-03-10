import {defineStore} from "pinia";
import axios from 'axios'
import {ref} from "vue";

export const usePeopleStore = defineStore('people',() => {
  const people = ref([])
  async function jediData() {
    // const id = this.$route.params.id
    const response = await axios.get(`https://swapi.dev/api/people`)
    people.value = response.data.results
  }
  jediData()
  return {people}
})


export const useSwapiFilmsStore = defineStore('films', () =>{
  const films = ref([])

  async function filmsData() {
    const response = await axios.get('https://swapi.dev/api/films')
    films.value = response.data.results
  }
  filmsData()
  return {
    films,
  }
})
