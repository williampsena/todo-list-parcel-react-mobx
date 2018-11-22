
import React from 'react'
import ToDoListInput from './input'
import ToDoListTasks from './tasks'
import ToDoListFooter from './footer'

const Home = props => {
  const handleClear = () => props.store.tasks.clearTasks()

  return (
    <section className='hero is-light is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='box'>
            <nav className='panel is-light'>
              <p className='panel-heading'>
                Task Manager
              </p>
              <ToDoListInput store={props.store} />
              <ToDoListTasks store={props.store} />
              <ToDoListFooter store={props.store} />
              <p className='panel-block'>
                <button className='button is-danger is-outlined is-fullwidth' onClick={handleClear}>
                  <i className='icon fas fa-trash' />Clear
                </button>
              </p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
