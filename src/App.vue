<template>
  <div id="app">
	<router-view/>
  </div>
</template>
<script>
export default {
	name: 'App'
}
</script>
<style>
@import "./assets/css/common/base.scss";
body{
	width:100%;
	height: 100%;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: absolute;
	width:100%;
	height: 100%;
	top:0;left: 0;
}
</style>
