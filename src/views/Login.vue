<template>
    <div>
        <v-card class="mx-auto" max-width="500">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field placeholder="email"></v-text-field>
                    <v-text-field placeholder="password"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn to="/">Login</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>