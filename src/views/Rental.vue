<template>
  <div class="income">
    <v-row justify="center">
      <h1>Rental Analysis</h1>
    </v-row>
    <RentalWizard :property="property" mode="create" />
  </div>
</template>

<script>
import RentalWizard from '@/components/RentalWizard.vue';
export default {
  components: { RentalWizard },
  data() {
    return {
      property: {
        address: '',
        nickname: '',
        money: {
          income: {
            list: [
              { name: 'Income', amount: '' },
              { name: 'Other', amount: '' },
            ],
            total: '',
          },
          expenses: {
            list: [
              { name: 'Tax', amount: '' },
              { name: 'Insurance', amount: '' },
              { name: 'Utilities', amount: '' },
              { name: 'HOA', amount: '' },
              { name: 'Property Care', amount: '' },
              { name: 'Vacancy', amount: '' },
              { name: 'Repairs', amount: '' },
              { name: 'Capital Expenditure', amount: '' },
              { name: 'Property Management', amount: '' },
              { name: 'Mortage', amount: '' },
            ],
            total: '',
          },
          costs: {
            list: [
              { name: 'Property', amount: '' },
              { name: 'Rehab', amount: '' },
              { name: 'Misc', amount: '' },
            ],
            total: '',
          },
          analysis: {
            cashflow: '',
            roi: '',
          },
        },
      },
    };
  },
};
</script>
