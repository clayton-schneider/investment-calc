<template>
    <div>
        <v-card flat>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="property.address" placeholder="Address"></v-text-field>
                    <v-text-field v-model="property.nickname" placeholder="Nickname"></v-text-field>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props: ['property'],
    computed: {
        newProperty() { return this.$store.state.newProperty }
    }
}
</script>