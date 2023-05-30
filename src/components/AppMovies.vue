<script>

import { store } from '../data/store';

export default {
    name: "AppMovies",
    props: {
        poster_path: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
    },

    data() {
        return {
            store,
        }
    },
    computed:{
        vote() {
            return Math.round(this.item.vote_average / 2);
        }
    },

    methods: {
        languageImage(index) {
            if (index == 'en') {
                return 'https://flagsapi.com/GB/flat/32.png'
            } else if (index == 'ja') {
                return 'https://flagsapi.com/JP/flat/32.png'
            } else {
                return ('https://flagsapi.com/' + index.toUpperCase() + '/flat/32.png')
            }
        },
        getStarClass(numStella) { //Corretto seguendo il LC di Luca

            let classeStella = "";

            if (numStella <= this.vote) {
                classeStella = "fa-solid";
            } else {
                classeStella = "fa-regular";
            }

            classeStella += " fa-star";

            return classeStella;
            }
    },

};
</script>

<template>
    <div class="movies">

        <div class="card">
            <img class="poster" v-if="poster_path" :src="`http://image.tmdb.org/t/p/w342${poster_path}`" alt="">

            <div class="card-content">

                <div class="info_card">
                    <p>{{ title }}</p>
                    <p>{{ original_title }}</p>

                    <img :src="languageImage(original_language)" alt="">

                    <p>{{ getStarClass(vote_average) }}</p>
                </div>

            </div>
        </div>




    </div>
</template>


<style lang="scss" scoped>
$color-primary-white: rgb(240, 240, 240);

.card {
    width: 400px;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    color: $color-primary-white;
    box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.9);
    margin-bottom: 3rem;
    margin-inline: 3rem;

    .poster {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.9;
        transition: opacity 0.1s ease-out;
    }

    .info_card {
        color: black;
        position: absolute;
        opacity: 0;
        max-width: 80%;
        transition: opacity 0.1s ease-out;
    }

    .info_card {
        inset: auto auto 80px 30px;
    }




    &:hover .info_card {
        opacity: 1;
        transition: opacity .5s .2s ease-in;
    }

    &:hover .poster {
        transition: opacity .1s ease-in;
        opacity: .2;
    }

}

</style>