
import React from 'react'
import { observer } from 'mobx-react'
import { css } from 'glamor'

class ToDoListFooter extends React.Component {
  constructor (props) {
    super(props)
    this.tasks = this.props.store.tasks
  }

  handleSetFilter = filter => () => { this.tasks.setFilter(filter) }

  renderFilters () {
    const cssClass = filter => filter === this.tasks.filter
      ? 'button is-small is-dark is-selected'
      : 'button is-small'

    const filters = [
      { label: 'All', value: null },
      { label: 'Active', value: false },
      { label: 'Completed', value: true }
    ]

    return (
      <div className='buttons has-addons'>
        {filters.map(filter => (
          <button
            key={filter.label}
            className={cssClass(filter.value)}
            onClick={this.handleSetFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className='panel-block' {...ToDoListFooter.styles}>
        <nav className='level'>
          <div className='level-left'>
            <strong className='count'>{this.tasks.summary.left}</strong>
            items left
          </div>
          <div className='level-right'>
            {this.renderFilters()}
          </div>
        </nav>
      </div>
    )
  }
}

ToDoListFooter.styles = css({
  '& .level': {
    width: 'calc(100%)'
  },
  '& .count': {
    padding: '0.5rem'
  }
})

export default observer(ToDoListFooter)
