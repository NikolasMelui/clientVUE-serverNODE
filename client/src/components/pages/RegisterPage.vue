<template>
    <v-container xs10 offset-xs1>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Username"
          v-model="username"
          :rules="usernameRules"
          :counter="16"
          required
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="passwordRules"
          :counter="16"
          required
        ></v-text-field>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
        ></v-checkbox>
        <div class="dangerAlert" v-html="error" />
        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
      </v-form>
  </v-container>
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
      valid: false,
      error: null,
      username: '',
      usernameRules: [
        (v) => !!v || 'Username is required',
        (v) => v.length <= 16 || 'Username must be less than 16 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length <= 16 || 'Password must be less than 16 characters'
      ],
      checkbox: null,
      checkboxRules: [
        (v) => !!v || 'You must agree to continue!'
      ]
    };
  },
  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        try {
          await AuthenticationService.register({
            username: this.username,
            email: this.email,
            password: this.password
          });
        } catch (error) {
          this.error = error.response.data.error;
        }
        console.log(this);
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
