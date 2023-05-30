<script>

import {store} from "../data/store";
import axios from 'axios';

export default{
    components: {
        name: "AppHeader"
    },
    data(){
        return{
            store
        }
    },
    methods: {
        Searching() {
            this.$emit('submit');
        },
    },

    mounted(){

    }
}
</script>

<template>
    <header>
        <nav>
            <div>
                <h1>BOOLFLIX</h1>
            </div>

            <div class=" search input-group mb-3">
                <input type="text" class="form-control" placeholder="Search..." v-model="store.SearchText" @keyup.enter="Searching">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" @click="Searching" type="button">Search</button>
                </div>
            </div>

        </nav>
    </header>
</template>

<style scoped lang="scss">
nav {
    height: 7rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: red;
}

h1 {
    color: red;
    font-size: 3rem;
    margin: 1rem;
    text-shadow:6px 4px 2px rgba(255,21,8,0.43); 
}



.search {
    padding: 1rem 0 0 7rem;
    justify-content: center;
    align-items: center;
}
</style>