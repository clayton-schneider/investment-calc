<template>
  <div>
    <v-card v-if="!registered" class="mx-auto" max-width="500">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            type="email"
            label="email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            @keydown.enter="register"
          ></v-text-field>
          <p v-if="feedback" class="red--text">{{ feedback }}</p>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import db from '@/firebase.js';
import firebase from 'firebase';
export default {
  name: 'Register',
  data() {
    return {
      registered: false,
      team: false,
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    register() {
      if (this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user.uid);
            this.$store.commit('login', cred.user.uid);
            this.$router.push({ name: 'Rental' });
          })
          .catch(err => (this.feedback = err.message));
      } else {
        this.feedback = 'You must enter all fields';
      }
    },
  },
};
</script>
