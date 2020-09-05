<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="500">
      <v-form>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="email"
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            @keydown.enter="login"
          ></v-text-field>

          <p class="red--text" v-if="feedback">{{ feedback }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="login">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user.uid);
            this.$store.commit('login', cred.user.uid);
            this.$router.push('/dashboard');
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Please make sure to fill all fields';
      }
    },
  },
};
</script>
