<template>
  <div class="home">
    <h1 class="text-center">Rental Calculator</h1>
    <v-row justify="center">
      <v-btn to="/rental">Begin</v-btn>
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
