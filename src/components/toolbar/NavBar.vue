<template>
  <v-layout>
      <v-toolbar app dark color="primary">
        <v-toolbar-side-icon
        @click.stop="drawer = !drawer"/>
          <v-toolbar-title>
            <img height="50" src="@/assets/logo_yupivoy_white_background.png" alt="Yupivoy"/>
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn class="hidden-sm-and-down" flat exact small
            v-for="(route, index) in routes"
            :key="`${index}_${route.name}`"
            :to="route.path">
              {{route.name}}
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <!-- <navigation-drawer
        :drawer="drawer"/> -->
      <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      absolute >
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile>
                Yupivoy
              </v-list-tile>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="drawer = !drawer">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <template v-for="(route, index) in routes">
            <v-list-tile
            :key="`${index}_${route.name}`"
            ripple
            :to="route.path" >
              {{route.name}}
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: null,
      routes: [],
    };
  },
  methods: {
    initComponent() {
      this.routes = this.$router.options.routes;
    },
  },
  mounted() {
    this.initComponent();
  },
  components: {
    'navigation-drawer': () => import('@/components/toolbar/NavigationDrawer'),
  },
};
</script>

<style lang="sass" scoped>
</style>
