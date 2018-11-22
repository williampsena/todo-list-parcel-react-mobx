
import React from 'react'

class ToDoListInput extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  addTask () {
    const { store } = this.props
    const { task } = this.state

    this.setState({ task: '' }, () => {
      store.tasks.addTask({ name: task, done: false })
    })
  }

  handleOnTextChange = event => {
    const { value } = event.target
    this.setState({ task: value })
  }

  onKeyUp = event => {
    const { value } = event.target
    if (value && event.key === 'Enter') this.addTask()
  }

  render () {
    const { task } = this.state

    return [
      <div key='input' className='panel-block'>
        <p className='control has-icons-left'>
          <input
            id='task'
            className='input'
            type='text'
            placeholder='Whats needs to be done?'
            value={task}
            onChange={this.handleOnTextChange}
            onKeyUp={this.onKeyUp}
          />
          <span className='icon is-small is-left'>
            <i className='fas fa-tasks' aria-hidden='true' />
          </span>
        </p>
      </div>
    ]
  }
}

export default ToDoListInput
