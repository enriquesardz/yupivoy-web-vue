<template>
  <div id="app">
    <v-app>
      <navbar />
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      <v-footer absoulute></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'navigation-drawer': () => import('@/components/toolbar/NavigationDrawer'),
    navbar: () => import('@/components/toolbar/NavBar'),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
