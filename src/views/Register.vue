<template>
    <div>
        <v-card v-if="!registered" class="mx-auto" max-width="500">
            <v-card-title>Register</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field placeholder="name"></v-text-field>
                    <v-text-field placeholder="email"></v-text-field>
                    <v-text-field placeholder="password"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="registered = true">Register</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="registered && !team" class="mx-auto" max-width="500">
            <v-card-title>Is this a personal or team account?</v-card-title>

            <v-card-actions>
                <v-btn to="/">Personal</v-btn>
                <v-btn @click="team = true">Team</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="registered && team" class="mx-auto" max-width="500">
            <v-card-title>Invite team members</v-card-title>
            <v-card-text>
                <p>Link</p>
            </v-card-text>
            <v-card-actions>
                <v-btn to="/">Next</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registered: false,
            team: false
        }
    }
}
</script>