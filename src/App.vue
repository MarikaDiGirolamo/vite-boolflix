<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppComponent,
    AppCard
  }
}

</script>

<template>

<AppHeader />
<AppMain />
<AppFooter />

</template>

<style lang="scss" scoped>
@use './styles/generic.scss' as *;
@use './styles/partials/_mixins.scss' as *;
@use './styles/partials/_variables.scss' as *;

</style>
