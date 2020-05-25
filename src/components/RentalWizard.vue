<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-tabs v-model="tabs">
        <v-tab>Income</v-tab>
        <v-tab>Expenses</v-tab>
        <v-tab>Costs</v-tab>
        <v-tab>Analysis</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <MoneyForm :money="income"/>
        </v-tab-item>
        <v-tab-item>
          <MoneyForm :money="expenses"/>
        </v-tab-item>
        <v-tab-item>
          <MoneyForm :money="costs" />
        </v-tab-item>
        <v-tab-item>
          <RentalAnalysis />
        </v-tab-item>
      </v-tabs-items>
      <v-card-actions>
        <v-btn v-if="tabs !== 0" @click="back">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="tabs !== 3" @click="next">Next</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import MoneyForm from '@/components/MoneyForm.vue'
import RentalAnalysis from '@/components/RentalAnalysis.vue'
export default {
  components: {
    MoneyForm,
    RentalAnalysis
  },
    data() {
        return {
            tabs: null
        }
    },
    computed: {
      income() {
        return this.$store.state.income
      },
      expenses() {
        return this.$store.state.expenses
      },
      costs() {
        return this.$store.state.costs
      }
    },
    methods: {
      back() {
        this.tabs -= 1
      },
      next() {
        this.tabs += 1
      }
    }
}
</script>