<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="grey lighten-4">
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat class="black--text" v-for="item in menuItemsLeft" :key="item.title">
          <v-spacer></v-spacer>{{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat class="black--text" v-for="item in menuItemsRight" :key="item.title">
          <v-spacer></v-spacer>{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>

// import DevelopPartail from '../partials/DevelopPartial'; // Временная заглушка на страницы без инфы

// import HeadPartial from '../partials/HeadPartial';
// import HeaderPartial from '../partials/HeaderPartial';
// import FooterPartial from '../partials/FooterPartial';
// import DonationPartial from '../partials/DonationPartial';

export default {
  name: 'MainPage',
  data () {
    return {
      sideNav: false,
      menuItemsLeft: [
        { title: 'Главная' },
        { title: 'Ивенты' },
        { title: 'О нас' },
        { title: 'Отчеты' },
        { title: 'Сотрудничество' }
      ],
      menuItemsRight: [
        { title: 'Вход' },
        { title: 'Регистрация' }
      ]
    };
  }
};
</script>

<style scoped>

</style>
