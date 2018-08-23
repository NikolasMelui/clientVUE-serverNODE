<template>
<v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItemsLeft"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="item in menuItemsRight"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="grey lighten-4">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-only">
        <v-btn
          flat
          v-for="item in menuItemsLeft"
          :key="item.title"
          :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-only">
        <v-btn
          flat
          v-for="item in menuItemsRight"
          :key="item.title"
          :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItemsLeft: [
        { title: 'Главная', link: '/' },
        { title: 'Ивенты', link: '/events' },
        { title: 'О нас', link: '/about' },
        { title: 'Отчеты', link: '/reports' },
        { title: 'Сотрудничество', link: '/partnership' }
      ],
      menuItemsRight: [
        { title: 'Вход', link: '/singin' },
        { title: 'Регистрация', link: '/singup' }
      ]
    };
  }
};
</script>

<style lang="stylus">
  @require './stylus/main'
</style>
