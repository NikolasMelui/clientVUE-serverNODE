<template>
  <div>
    <h1>Register</h1>
    <form>
      <input type="email" placeholder="email" require></input>
      <input type="password" placeholder="password" require></input>
      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
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
