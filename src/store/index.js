import { onError } from 'mobx-react'
import TasksStore from './tasks'

class Store {
  tasks = new TasksStore()
}

onError(error => {
  console.error(error)
})

export const appStore = new Store()
