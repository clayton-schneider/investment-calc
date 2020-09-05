<template>
  <v-app-bar mobile-break-point="600" app>
    <v-toolbar-title to>
      <router-link to="/dashboard">Estate Tracker</router-link></v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn v-if="user" @click="logout">Logout</v-btn>
    <v-btn v-if="!user" to="/login">Login</v-btn>
    <v-btn v-if="!user" to="/register" class="ml-2">Register</v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase';

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('logout');
          this.$router.push({ name: 'Login' });
        });
    },
  },
};
</script>

<style>
.v-toolbar__title a {
  text-decoration: none;
}
</style>
