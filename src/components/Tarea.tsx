import React from 'react'

type Props = {
  tarea: string
  borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: Props) => {
  return (
    <div className='task'>
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Eliminar</button>
    </div>
  )
}