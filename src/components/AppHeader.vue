<script>
export default {
    name: "AppHeader",
    components: {
        
        },
        data(){
            return{

            }
        },
        methods: {

        },
        mounted() {

        }
}
</script>

<template>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <!-- Container wrapper -->
            <div class="container-fluid">
                <!-- Navbar brand -->
                <a class="navbar-brand" href="#">Boolflix</a>

                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>

                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Recently Added</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">My List</a>
                        </li>
                    </ul>
                    <!-- Left links -->

                    <!-- Search form -->
                    <form class="d-flex input-group w-auto">
                        <input type="search" class="form-control" placeholder="Type query" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark" style="padding: .45rem 1.5rem .35rem;">
                        Search
                        </button>
                    </form>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">CHILDREN</a>
                        </li>
                        <!-- Navbar dropdown -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
                                data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bell"></i>
                            </a>
                        </li>       
                    </ul>
                </div>
                <!-- Collapsible wrapper -->
            </div>
        <!-- Container wrapper -->
        </nav>
<!-- Navbar -->
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/generic.scss' as *;



.navbar-dark .nav-item .nav-link {
    color: #fff;
}

.navbar-dark .nav-item .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    border-radius: 0.25rem;
    color: #fff;
}

</style>
