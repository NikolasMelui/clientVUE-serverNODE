<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex>
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
            label="Я согласен с правилами"
            v-model="checkbox"
            required
          ></v-checkbox>
          <div class="dangerAlert" v-html="error"/>
          <v-btn pink darken-4
            @click="singup"
            :disabled="!valid"
          >
            Регистрация
          </v-btn>
          <v-btn @click="clear">Сброс</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
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
      username: null,
      usernameRules: [
        (v) => (v.length <= 16 && v.length >= 4) || 'Логин не может быть короче 4 и длиннее 16 символов'
      ],
      email: null,
      emailRules: [
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail введен неверно'
      ],
      password: null,
      passwordRules: [
        (v) => (v.length <= 16 && v.length >= 6) || 'Пароль не может быть короче 6 и длиннее 16 символов'
      ],
      checkbox: null,
      checkboxRules: [
        (v) => !!v || 'Ознакомьтесь с правилами, чтобы продолжить'
      ]
    };
  },
  methods: {
    singup () {
      if (this.$refs.form.validate()) {
        try {
          AuthenticationService.singup({
            username: this.username,
            email: this.email,
            password: this.password
          });
          // this.clear();
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    clear () {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.dangerAlert{
  color: red;
}
</style>
