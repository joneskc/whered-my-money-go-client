<template>
  <div id="app">
    <Header />
    <router-view
      :userName="userInput"
      :userId="userId"
      :getUser="getUser"
      :bills="bills"
      :getBills="getBills"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      userInput: null,
      userId: null,
      username: null,
      users: [],
      bills: [],
      billId: null
    }
  },
  methods: {
    getUser(username) {
        this.userInput = username
        this.getUsers()
    },
    getUsers() {
      const USERS_API_URL = 'https://sheltered-meadow-21600.herokuapp.com/api/users/'
      fetch(USERS_API_URL)
        .then(res => res.json())
        .then(res => {
          this.users = res
          this.getUserId()
        })
    },
    getUserId() {
      this.userId = this.users.data.filter(user => user.userName === this.userInput)[0].id
      this.getBills()
    },
    getBills() {
      const BILLS_API_URL = `https://sheltered-meadow-21600.herokuapp.com/api/bills/${this.userId}`
      fetch(BILLS_API_URL)
      .then(res => res.json())
      .then(res => {
        this.bills = res
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height:100%;
  position:relative;
}

.container {
  margin-top: 50px;
}
</style>
