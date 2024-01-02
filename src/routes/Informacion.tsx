import React from 'react'
import "../styles/Informacion.css"

type Props = {
  tittle: string
}

export const Informacion = ({ tittle }: Props) => {
  return (
    <div className='container-info'>
      <h1>{tittle}</h1>
    </div>
  )
}