<template>
    <div>
        <v-row align="center">
            <h1 class="mx-5">Leads</h1>
            <v-btn outlined to="/rental">Analyze Property</v-btn>
        </v-row>
        
        <v-card flat class="pa-3 ma-3">
            <v-row class="px-4">
                <v-col md="3" >
                    <div>Nickname</div>
                </v-col>
                <v-col md="6" >
                    <div>Address</div>
                </v-col>
                <v-col md="3">
                    <div>ROI</div>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-list>
                <v-list-item-group>
                    <v-list-item
                        v-for="property in properties" 
                        :key="property.id"
                        :to="{ name: 'Property', params: {propertyId: property.id}}"
                        >
                        <v-list-item-content class="ma-0 pa-0">
                            <v-row>
                                <v-col md="3" >
                                    <p>{{property.nickname}}</p>
                                </v-col>
                                <v-col md="6" >
                                    <p>{{property.address}}</p>
                                </v-col>
                                <v-col md="3">
                                    <p>ROI</p>
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

<style lang="scss">
.link {
    text-decoration: none;
    color: black;
}
</style>