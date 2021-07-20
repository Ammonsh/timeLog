<template>
<div id="app">
  <div class="header">
    <h1>Ammon</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/timelog">Time Log</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>
body {
  margin: 0px;
}

.header {
  display: flex;
  justify-content: space-between;
  background: maroon;
  padding: 10px 100px;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  padding: 10px 100px;
}
</style>
