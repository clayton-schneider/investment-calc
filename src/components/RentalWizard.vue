<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-tabs v-model="tabs">
        <v-tab>Income</v-tab>
        <v-tab>Expenses</v-tab>
        <v-tab>Costs</v-tab>
        <v-tab>Analysis</v-tab>
        <v-tab>Save</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <MoneyForm :money="property.money.income"/>
        </v-tab-item>
        <v-tab-item>
          <MoneyForm :money="property.money.expenses"/>
        </v-tab-item>
        <v-tab-item>
          <MoneyForm :money="property.money.costs" />
        </v-tab-item>
        <v-tab-item>
          <RentalAnalysis :numbers="property.money" />
        </v-tab-item>
        <v-tab-item>
          <Save :property="property"/>
        </v-tab-item>
      </v-tabs-items>
      <v-card-actions>
        <v-btn v-if="tabs !== 0" @click="back">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="tabs !== 4" @click="next">Next</v-btn>
        <v-btn v-if="tabs === 4 && mode === 'create'" @click="create">Save</v-btn>
        <v-btn v-if="tabs === 4 && mode === 'edit'" @click="update">Update</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import MoneyForm from '@/components/rental/MoneyForm.vue'
import RentalAnalysis from '@/components/rental/RentalAnalysis.vue'
import Save from '@/components/rental/Save.vue'

export default {
  props: ['property', 'mode'],
  components: {
    MoneyForm,
    RentalAnalysis,
    Save
  },
  data() {
        return {
            tabs: null
        }
  },
  methods: {
    back() {
      this.tabs -= 1
    },
    next() {
      this.tabs += 1
    },
    create() {
      this.$store.dispatch('CREATE_PROPERTY', this.property)
      this.$router.push('/')
    },
    update() {
      this.$store.dispatch('UPDATE_PROPERTY', this.property)
    }
  }
}
</script>