<template>
  <div class="navbar">
    <nav class="navbar-wrapper">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo">GeoNomads</router-link>
        <ul class="right">
          <li v-if="!user"><router-link :to="{ name: 'Singup' }">SingUp</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li v-if="user"><a>{{ user.email }}</a></li>
          <li v-if="user"><a @click="logout">Logout</a></li>
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
      user: null
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

<style>
.navbar-wrapper {
  font-family: 'Inconsolata', monospace;
  background: #9B3838;
}
</style>


