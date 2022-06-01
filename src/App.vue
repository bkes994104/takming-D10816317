<template>
  <v-app>
    <v-main class="background">
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
  @import'./assets/css/style.css';
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
