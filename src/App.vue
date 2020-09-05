<template>
  <v-app>
    <Nav />

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <MobileNav />
  </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue';
import MobileNav from '@/components/MobileNav.vue';
export default {
  components: {
    Nav,
    MobileNav,
  },
  name: 'App',
  async created() {
    this.$store.dispatch('LOAD_PROPERTIES');
  },
};
</script>
