import React from 'react'
import { Tarea } from './Tarea'

type Props = {
  listaTareas: string[]
  borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: Props) => {
  return (
    <div className='taskList'>
      {
        listaTareas.map((task, index) => (
          <Tarea tarea={task} key={index} borrarTarea={() => borrarTarea(index)}/>
        ))
      }
    </div>
  )
}