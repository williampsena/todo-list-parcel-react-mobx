import { action, observable, computed } from 'mobx'

class TasksStore {
  @observable data = []

  @observable filter = null

  @action setFilter = filter => { this.filter = filter }

  @action addTask (task) {
    this.data.push(task)
  }

  @action clearTasks () {
    this.data.clear()
  }

  @action toggleDone (task) {
    task.done = !task.done
  }

  getTasks (filter) {
    return this.filter === null
      ? this.data
      : this.data.filter(x => x.done === filter)
  }

  @computed get tasks () {
    return this.getTasks(this.filter)
  }

  @computed get summary () {
    return {
      done: this.data.filter(x => x.done).length,
      left: this.data.filter(x => !x.done).length
    }
  }
}

export default TasksStore
