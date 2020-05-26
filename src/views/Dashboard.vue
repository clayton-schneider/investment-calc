<template>
    <div>
        <h1>Dashboard</h1>
        <v-btn to="/rental">Analyze Property</v-btn>
        <v-row class="ma-5" v-for="property in properties" :key="property.id" >
            <router-link :to="{ name: 'Property', params: {propertyId: property.id}}">
                {{property.nickname}}
            </router-link>
            <v-spacer></v-spacer>
            <v-btn @click="deleteProperty(property.id)"><v-icon>mdi-delete</v-icon></v-btn>
        </v-row>

    </div>
</template>

<script>
export default {
    computed: {
        properties() {
            return this.$store.state.properties
        }
    },
    methods: {
        deleteProperty(propertyId) {
            this.$store.dispatch('DELETE_PROPERTY', propertyId)
        }
    }
}
</script>