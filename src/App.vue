<template>
  <nav
    class="nav text-uppercase bg-success d-flex justify-content-around align-items-center"
  >
    <router-link class="text-white" :to="{ name: 'projects' }"
      >projects</router-link
    >
    |
    <router-link class="text-white" :to="{ name: 'add-project' }"
      >add project</router-link
    >
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
