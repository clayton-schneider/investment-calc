import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';
import firebase from 'firebase';
import db from '@/firebase.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    properties: [],
    user: null,
  },
  mutations: {
    setProperties(state, snapshot) {
      state.properties = [];
      snapshot.forEach(doc => {
        let property = doc.data();
        property.id = doc.id;
        state.properties.push(property);
      });
    },
    reset(state) {
      state.newProperty = {
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
        },
      };
    },
    deleteProperty(state, propertyId) {
      state.properties = state.properties.filter(
        property => property.id !== propertyId
      );
      router.push('/dashboard');
    },
    login(state, userId) {
      state.user = userId;
    },
    logout(state) {
      state.user = null;
    },
  },
  actions: {
    async CREATE_PROPERTY({ dispatch, commit, state }, newProperty) {
      newProperty.user = state.user;
      await db.collection('properties').add(newProperty);
      await dispatch('LOAD_PROPERTIES');
    },
    async UPDATE_PROPERTY({ dispatch }, editedProperty) {
      await db
        .collection('properties')
        .doc(editedProperty.id)
        .update(editedProperty);
      await dispatch('LOAD_PROPERTIES');
    },
    async LOAD_PROPERTIES({ commit, state }) {
      const user = firebase.auth().currentUser;
      if (user) {
        commit('login', user.uid);
        const snapshot = await db
          .collection('properties')
          .where('user', '==', state.user)
          .get();
        commit('setProperties', snapshot);
      }
    },
    async DELETE_PROPERTY({ dispatch, commit }, propertyId) {
      await db
        .collection('properties')
        .doc(propertyId)
        .delete();
      commit('deleteProperty', propertyId);
    },
  },
  modules: {},
});
