<script>
import userPage from './components/userPage.vue'
import homePage from './components/homePage.vue'
import loginPage from './components/loginPage.vue'

export default {
  components: {
    userPage,
    homePage,
    loginPage
  },
  data: () => ({
    currentPage: 'user'
  }),
  computed: {
    renderPage() {
      return this.currentPage + 'Page'
    }
  },
  methods: {
    showHomePage() {
      this.currentPage = 'home'
    },
    showLoginPage() {
      this.currentPage = 'login'
    },
    showUserPage() {
      this.currentPage = 'user'
    }
  }
}
</script>

<template>
  <header class="header">
    <h1>Project 3</h1>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="" @click.prevent="showUserPage">User</a>
    </nav>
  </header>
  <Suspense>
    <component :is="renderPage" :key="renderPage" />

    <template v-slot:fallback> Data is loading... </template>
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
