<template>
  <div class="home">
    <h1 class="text-center">Investor</h1>
    <v-row justify="center">
      <v-btn to="/rental">Sign Up</v-btn>
      <v-btn to="/rental">Log In</v-btn>
    </v-row>
  </div>
</template>

<script>
import RentalWizard from '@/components/RentalWizard.vue'

export default {
  name: 'Home',
  components: {
    RentalWizard
  }

}
</script>
