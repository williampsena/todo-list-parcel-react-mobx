
import React from 'react'
import { observer } from 'mobx-react'

@observer
class ToDoListTasks extends React.Component {
  constructor (props) {
    super(props)
    this.tasks = this.props.store.tasks
  }

  handleToggleDone = task => () => {
    this.tasks.toggleDone(task)
  }

  renderIcon = task => {
    const cssClass = task.done ? 'fas fa-dot-circle' : 'far fa-circle'

    return (
      <span className='panel-icon' key={task.done}>
        <i className={cssClass} />
      </span>
    )
  }

  renderItem = (task, i) => {
    return (<div key={i} className='panel-block'>
      <a onClick={this.handleToggleDone(task)}>
        {this.renderIcon(task)}
        <span>{task.name}</span>
      </a>
    </div>)
  }

  render () {
    return this.tasks.tasks.map(this.renderItem)
  }
}

export default ToDoListTasks
