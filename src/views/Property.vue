<template>
    <div v-if="property">
        <v-row align="center">         
            <h1 class="mx-5">{{property.nickname}}</h1>
            <v-btn outlined to="/">Back</v-btn>
        </v-row>

        <RentalWizard :property="property" mode="edit"/>
    </div>
</template>

<script>
import db from '@/firebase.js'
import RentalWizard from '@/components/RentalWizard.vue'
export default {
    components: {
        RentalWizard
    },
    data() {
        return {
            property: null
        }
    },
    computed: {
        properties() { return this.$store.state.properties}
    },
    async created() {
        let snapshot = await db.collection('properties').doc(this.$route.params.propertyId).get()
        this.property = snapshot.data()
        this.property.id = snapshot.id
    } 
}
</script>