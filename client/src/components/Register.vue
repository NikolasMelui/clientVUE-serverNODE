<template>
  <div>
    <h1>Register</h1>
    <form>
      <input type="email" placeholder="email" name="email" v-model="email" require></input>
      <input type="password" placeholder="password" name="password" v-model="password" require></input>
      <input type="button" name="button" value="button" @click="register"/>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello!'
    // }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
