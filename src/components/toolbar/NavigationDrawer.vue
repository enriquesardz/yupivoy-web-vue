<template>
      <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      absolute >
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: ['drawer'],
};
</script>

<style lang="sass" scoped>
</style>
