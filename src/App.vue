/* eslint-disable */
<template>
  <TheHeader />
  <router-view></router-view>
  <!-- <RouterView></RouterView> -->
  <TheFooter />
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import FormPage from './pages/FormPage.vue';
import PreviewPage from './pages/PreviewPage.vue';



export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    FormPage,
    PreviewPage,

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
