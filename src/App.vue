<template>
  <div id="nav">
    <Button :text="1234"/>
  </div>
</template>

<script>
import Button from '../src/package/button/index.vue'

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
