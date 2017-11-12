<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
// import AuthenticationService from '@/services/AuthenticationService';

export default {
  data () {
    return {
      msg: 'Events page'
    };
  },
  methods: {
    // async newMethod () {
    //   const response = await AuthenticationService.newMethod({
    //   });
    //   this.newItem = response.data.newItemSeccessfulMessage;
    // }
  }
};
</script>

<style scoped>
</style>
