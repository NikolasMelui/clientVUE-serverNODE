<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>

// import DevelopPartail from '../partials/DevelopPartial'; // Временная заглушка на страницы без инфы

// import HeadPartial from '../partials/HeadPartial';
// import HeaderPartial from '../partials/HeaderPartial';
// import FooterPartial from '../partials/FooterPartial';
// import DonationPartial from '../partials/DonationPartial';

import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.resposne.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error{
  color: red;
}
</style>
