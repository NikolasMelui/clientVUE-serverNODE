<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Логин или email"
            v-model="email"
            :counter="16"
            required
          ></v-text-field>
          <v-text-field
            label="Пароль"
            v-model="password"
            :counter="16"
            required
          ></v-text-field>
          <div class="dangerAlert" v-html="error"/>
          <v-btn pink darken-4
            @click="singin"
            :disabled="!valid"
          >
            Вход
          </v-btn>
          <v-btn @click="clear">Сброс</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
    singin () {
      if (this.$refs.form.validate()) {
        try {
          AuthenticationService.singin({
            email: this.email,
            password: this.password
          })
          .then((res) => {
            console.log(res.data.msg);
          });
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
