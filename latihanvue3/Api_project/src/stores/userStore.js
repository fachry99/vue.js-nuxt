import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    userList: []
  }),
  getters: {
    shortUserList: (state) => {
      return state.userList.splice(0, 5)
    }
  },
  actions: {
    async getUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json()
      )
      this.userList = response
    }
  }
}) // This is the user store
