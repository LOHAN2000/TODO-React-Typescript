import  { useState } from 'react'
import { ListaTareas } from './ListaTareas'


export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') {
      return
    }
    setListaTareas(prev => [...prev, nuevaTarea])
    setNuevaTarea('')
  }

  const handleDeleteTask = (index: number) => {
    setListaTareas(prev => prev.filter((_: string, i: number) => i !== index))
  }


  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input onChange={(e) => setNuevaTarea(e.target.value)} type='text' value={nuevaTarea} placeholder='Nueva Tarea'/>
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      {
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleDeleteTask}/>
      }
    </div>
  )
}