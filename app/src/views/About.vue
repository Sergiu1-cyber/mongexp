<template>
  <div class="about w3-container">
    <h1 class="w3-animate-fading">This is an about page</h1>
    <button @click="citData">Citesc Data</button>
    <p class="w3-text-red">{{ info }}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        info: ''
      }
    },
    methods: {
      citData() {
        axios.post('http://localhost:3000/db/citesc')
        .then(res => this.info = res.data)
        .catch(err => alert(err))
      }
    }
  }
</script>
