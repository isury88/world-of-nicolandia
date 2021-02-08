<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="text-center">Welcome to Nicolandia</h1>
      <v-divider></v-divider>
      <v-row class="mt-5">
        <v-col cols="12" sm="8" md="6">
          <v-radio-group
            v-model="genderGroup"
            mandatory
            class="mr-5"
            @change="updateGender"
          >
            <v-radio label="Boy" value="boy"></v-radio>
            <v-radio label="Girl" value="girl"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="8" md="5">
          <v-text-field
            v-model="nameUpdated"
            :label="user.name"
            class="ml-5"
            placeholder="Type your Name"
            @input="updateUsername"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn to="start">Start Game</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      genderGroup: this.$store.getters.getGender,
      nameUpdated: '',
    }
  },
  computed: {
    ...mapState(['user']),
    // eslint-disable-next-line vue/no-dupe-keys
    genderGroup() {
      return this.$store.getters.getGender
    },
  },
  methods: {
    updateGender() {
      this.$store.commit('UPDATE_GENDER', this.genderGroup)
    },
    updateUsername() {
      this.$store.commit('UPDATE_USERNAME', this.nameUpdated)
    },
  },
}
</script>
