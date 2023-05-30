import { reactive } from 'vue';

export const store = reactive({
    searchText: "",
    loading: true,
    movies: [],
    series: [],
    apiURL: "https://api.themoviedb.org/3/search/", //"https://api.themoviedb.org/3/movie/550?api_key=1ec73bb891bfcf05eeda5ea8d9c9ef04",
    apiKEY: '1ec73bb891bfcf05eeda5ea8d9c9ef04'
})