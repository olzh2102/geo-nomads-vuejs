<template>
  <div class="singup container">
    <form class="card-panel">
      <h2 class="deep-purple-text center">Singup</h2>
      <div class="field">
        <label for="email">Email: </label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password: </label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias: </label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <div class="field center">
        <button class="btn deep-purple">Singup</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Singup',
  data() {
    return {
      email: null,
      password: null,
      alias: null
    }
  }
}
</script>

<style>
.singup {
  max-width: 400px;
  margin-top: 60px;
}

.singup h2 {
  font-size: 2.4em;
}

.singup .field {
  margin-bottom: 16px;
}

.card-panel {
  background: #FCFFF7;
  border-radius: 5px;
}
</style>
