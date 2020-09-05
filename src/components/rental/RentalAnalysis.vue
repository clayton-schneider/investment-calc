<template>
  <div>
    <v-card flat>
      <v-card-text>
        <p>Total Monthly Income: {{ total(income.list) }}</p>
        <p>Total Monthly Expenses: {{ total(expenses.list) }}</p>
        <h4>Monthly Cashflow: {{ cashflow }}</h4>
        <v-divider class="my-2"></v-divider>
        <p>Upfront Costs: {{ total(expenses.list) }}</p>
        <p>Annual Cashflow: {{ cashflow * 12 }}</p>
        <h4>ROI: {{ ROI }}</h4>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['numbers'],
  computed: {
    income() {
      return this.numbers.income;
    },
    expenses() {
      return this.numbers.expenses;
    },
    costs() {
      return this.numbers.costs;
    },
    cashflow() {
      return this.total(this.income.list) - this.total(this.expenses.list);
    },
    ROI() {
      const roi = (this.cashflow / this.total(this.costs.list)) * 100;
      if (roi) return roi;
      return 0;
    },
  },
  methods: {
    total(list) {
      let total = 0;
      for (const item of list) {
        if (item.amount) total += parseFloat(item.amount);
      }
      return total;
    },
    setTotals() {
      this.numbers.income.total = this.total(this.income.list);
      this.numbers.expenses.total = this.total(this.expenses.list);
      this.numbers.costs.total = this.total(this.costs.list);
    },
    setAnalysis() {
      this.numbers.analysis.cashflow = this.cashflow;
      this.numbers.analysis.roi = this.ROI;
    },
  },
  mounted() {
    this.setTotals();
    this.setAnalysis();
  },
};
</script>
