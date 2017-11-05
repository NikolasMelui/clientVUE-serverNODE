<template>
  <div>
    <h1>Register</h1>
    <form>
      <input type="email" placeholder="email" name="email" v-model="email" require></input>
      <input type="password" placeholder="password" name="password" v-model="password" require></input>
      <input type="button" name="button" value="button" @click="register"/>
    </form>
    <h1 name="registered" value="registered" v-model="registered"> {{ registered }}</h1>
  </div>
</template>

<script>

import DevelopPartail from '../partials/DevelopPartial'; // Временная заглушка на страницы без инфы

import HeadPartial from '../partials/HeadPartial';
import HeaderPartial from '../partials/HeaderPartial';
import FooterPartial from '../partials/FooterPartial';
import DonationPartial from '../partials/DonationPartial';

import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      email: '',
      password: '',
      registered: ''
    };
  },
  // watch: {
  //   email (value) {
  //     console.log('Email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      this.registered = response.data.seccessfulMessage;
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello!'
    //   console.log(this.email)
    // }, 2000)
  }
};
</script>

<style scoped>
</style>
