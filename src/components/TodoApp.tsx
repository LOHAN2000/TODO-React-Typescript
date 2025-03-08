import  { useState } from 'react'


export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])
  const handleAddTask = () => {

  }


  return (
    <div>
      <h1>Lista de Tareas</h1>
      {nuevaTarea && (
        <h1>{nuevaTarea}</h1>
      )}
      <div>
        <input onChange={(e) => setNuevaTarea(e.target.value)} type='text' value={nuevaTarea} placeholder='Nueva Tarea'/>
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  )
}