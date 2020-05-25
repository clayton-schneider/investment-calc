import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    income: {
      list: [ { name: 'Income', amount: '' }, { name: 'Other', amount: ''} ],
      total: ''
    },
    expenses: {
      list: [ { name: 'Tax', amount: '' }, { name: 'Insurance', amount: '' }, 
      { name: 'Utilities', amount: '' }, { name: 'HOA', amount: '' }, {name: 'Property Care', amount: ''},
      { name: 'Vacancy', amount: '' }, { name: 'Repairs', amount: '' }, {name: 'Capital Expenditure', amount: '' },
      { name: 'Property Management', amount: '' } , { name: 'Mortage', amount: '' } ],
      total: ''
    },
    costs: {
      list: [ {name: 'Property', amount: ''}, { name: 'Rehab', amount: '' }, { name: 'Misc', amount: '' } ],
      total: ''
    },
  },
  mutations: {
    setExpenseTotal(state, total) {
      state.expenses.total = total
    },
    setCostsTotal(state, total) {
      state.costs.total = total
    }
  },
  actions: {
  },
  modules: {
  }
})
