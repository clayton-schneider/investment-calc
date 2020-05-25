<template>
  <div class="income">
    <RentalWizard />
  </div>
</template>

<script>
import RentalWizard from '@/components/RentalWizard.vue'
export default {
  components: { RentalWizard },
  computed: {
    income() {
      return this.$store.state.income
    }
  }
}
</script>