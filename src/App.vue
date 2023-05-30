<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppMovies from './components/AppMovies.vue';
import AppSeries from './components/AppSeries.vue';

import axios from "axios"; //devo ricordarmi di riportarlo nel metodo!!!
import {store} from './data/store';

export default{
  components: {
    AppHeader,
    AppMain,
    AppMovies,
    AppSeries
  },
  data(){
    return{
      store
    }
  },
  methods: {
    dataApi() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            apiKEY: "1ec73bb891bfcf05eeda5ea8d9c9ef04",
            query: this.store.SearchText,
          },
        })
        .then((response) => (this.store.movies = response.data.results));

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            apiKEY: "1ec73bb891bfcf05eeda5ea8d9c9ef04",
            query: this.store.SearchText,
          },
        })
        .then((response) => (this.store.series = response.data.results));
    },

    created() {
      this.dataApi()
    },
  },
};
</script>

<template>
  <AppHeader @submit="dataApi" />
  <AppMain />
</template>

<style scoped lang="scss">
@use './styles/generic.scss' as *;

</style>
