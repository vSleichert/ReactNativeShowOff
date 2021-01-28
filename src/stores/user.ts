import { makeAutoObservable } from "mobx"
import { createContext } from "react"

class UserStore {
  loggedUsername = ''

  constructor() {
    makeAutoObservable(this)
  }

  setLoggedUser(username: string) {
    this.loggedUsername = username
  }

  resetStore() {
    this.loggedUsername = ''
  }
}

export const UserStoreContext = createContext(new UserStore())