<template>
  <div>
    <v-card flat>
      <v-card-text>
          <v-form>
            <v-text-field v-for="item in money.list" :key="item.name" :placeholder="item.name" v-model="item.amount"></v-text-field>
          </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ['money'],
}
</script>
