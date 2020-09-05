<template>
  <div>
    <v-row align="center">
      <h1 class="mx-5">Leads</h1>
      <v-btn outlined to="/rental">Analyze Property</v-btn>
    </v-row>

    <v-card flat class="pa-3 ma-3">
      <v-row class="px-4">
        <v-col md="3">
          <div>Address</div>
        </v-col>
        <v-col md="3">
          <div>Property Cost</div>
        </v-col>
        <v-col md="3">
          <div>Cashflow</div>
        </v-col>
        <v-col md="3">
          <div>ROI</div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group>
          <v-list-item v-for="property in properties" :key="property.id">
            <v-list-item-content
              @click="goToProperty(property.id)"
              class="ma-0 pa-0"
            >
              <v-row>
                <v-col md="3">
                  <p>{{ property.address }}</p>
                </v-col>
                <v-col md="3">
                  <p>{{ formatCurrency(property.money.costs.total) }}</p>
                </v-col>
                <v-col md="3">
                  <p>{{ formatCurrency(property.money.analysis.cashflow) }}</p>
                </v-col>
                <v-col md="3">
                  <p>{{ property.money.analysis.roi.toFixed(2) }}</p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    properties() {
      return this.$store.state.properties;
    },
  },
  methods: {
    goToProperty(propertyId) {
      this.$router.push({
        name: 'Property',
        params: { propertyId },
      });
    },
    formatCurrency(num) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      return formatter.format(num);
    },
  },
  async created() {
    this.$store.dispatch('LOAD_PROPERTIES');
  },
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: black;
}
</style>
