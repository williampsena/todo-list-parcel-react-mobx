import React from 'react'
import { render } from 'react-dom'
import { configure } from 'mobx'
import { ToDoListComponent } from './todoList'
import { appStore } from './store'
import DevTools from 'mobx-react-devtools'

configure({ enforceActions: 'always' })

render(
  <div>
    <DevTools />
    <ToDoListComponent store={appStore} />,
  </div>,
  document.getElementById('root')
)
