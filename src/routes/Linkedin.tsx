import React from 'react'
import { ButtonVolver } from '../components/ButtonVolver'
import { Card } from '../components/Card'
import "../styles/Linkedin.css"

type Props = {}

export const Linkedin = (props: Props) => {
  return (
    <main className='container-linkedin'>
      <article>
        <div className='container-boton-volver'>
          <ButtonVolver></ButtonVolver>
        </div>
        <h1>LinkedIn</h1>
        <div className='box-card'>
          <Card 
            tittle='LinkedIn'
          />
        </div>
      </article>
    </main>
  )
}