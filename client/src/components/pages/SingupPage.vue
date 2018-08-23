<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Username"
            v-model="formUsername"
            :rules="formUsernameRules"
            :counter="16"
            required
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="formEmail"
            :rules="formEmailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="formPassword"
            :rules="formPasswordRules"
            :counter="16"
            required
          ></v-text-field>
          
          <v-checkbox
            v-model="formTerms"
            label="Do you agree?"
            :rules="formTermsRules"
            required
            >
            <div slot="label" @click.stop="valid = true">
              Я принимаю
              <a href="javascript:;" @click.stop="terms = true">правила</a>
              .
            </div>
          </v-checkbox>
          
          <v-alert v-if="successMesShow" v-html="successMes" color="success" icon="check_circle" value="true"></v-alert>
          <v-alert v-if="errorMesShow" v-html="errorMes" color="error" icon="warning" value="true" dismissible></v-alert>
          
          <v-dialog v-model="terms" max-width="70%">
            <v-card>
              <v-card-title class="title">Правила</v-card-title>
              <v-card-text v-for="n in 5" :key="n">
                {{ content }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  color="purple"
                  @click="terms = false"
                >Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn pink darken-4
            @click="singup"
            :disabled="!formIsValid"
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
      errorMes: '',
      successMesShow: false,
      errMesShow: false,
      valid: false,
      terms: false,
      success: null,
      formUsername: '',
      formUsernameRules: [
        (v) => (v.length <= 16 && v.length >= 4) || 'Логин не может быть короче 4 и длиннее 16 символов'
      ],
      formEmail: '',
      formEmailRules: [
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail введен неверно'
      ],
      formPassword: '',
      formPasswordRules: [
        (v) => (v.length <= 16 && v.length >= 6) || 'Пароль не может быть короче 6 и длиннее 16 символов'
      ],
      formTerms: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      formTermsRules: [
        (v) => (v || '') || 'Ознакомьтесь с правилами, чтобы продолжить'
      ]
    };
  },
  methods: {
    async singup () {
      await AuthenticationService.singup({
        username: this.formUsername,
        email: this.formEmail,
        password: this.formPassword
      })
      .then((res) => {
        this.successMes = res.data;
        this.successMesShow = true;
        // setTimeout(() => { this.successMesShow = false; }, 2000);
        console.log(this.successMes);
        // this.clear();
      })
      .catch((err) => {
        this.errorMes = err.response.data.error;
        this.errorMesShow = true;
        // setTimeout(() => { this.errorMesShow = false; }, 2000);
        console.log(this.errorMes);
      });
    },
    clear () {
      // this.form = Object.assign({}, defaultForm);
      // this.$refs.form.reset();
      this.formUsername = 'nikolasmelui';
      this.formEmail = 'slak@samaradom.ru';
      this.formPassword = 'nikolaspassword';
    }
  },
  computed: {
    formIsValid () {
      return (
        this.formUsername &&
        this.formEmail &&
        this.formPassword &&
        this.formTerms
      );
    }
  }
};
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0
  }
</style>
