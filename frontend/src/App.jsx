import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const data = await res.json()
      setTodos(data)
    })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
