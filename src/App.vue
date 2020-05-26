<template>
  <v-app>
    <v-content class="my-10">
      <router-view></router-view>
    </v-content>
      
  </v-app>
</template>

<script>
import db from '@/firebase.js'

export default {
  name: 'App',
  async created() {
    this.$store.dispatch('LOAD_PROPERTIES')
  }
};
</script>
