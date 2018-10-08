<template>
  <div id="app">
 	<tabber></tabber>
    <router-view/>
  </div>
</template>

<script>
	import tabber from './components/HelloWorld'
export default {
  name: 'App',
  components:{
  	tabber
  },
  beforeCreate(){
  	this.$router.push('/')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
