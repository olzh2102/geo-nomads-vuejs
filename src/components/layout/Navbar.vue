<template>
  <div class="navbar">
    <nav class="navbar-wrapper">
      <div class="container">
        <a href="" class="brand-logo left">GeoNomads</a>
        <ul class="right">
          <li><router-link :to="{ name: 'Singup' }">SingUp</router-link></li>
          <li><a href="">Login</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Singup' })
      })
    }
  }
}
</script>

<style>
.navbar-wrapper {
  font-family: 'Inconsolata', monospace;
  background: #9B3838;
}
</style>


