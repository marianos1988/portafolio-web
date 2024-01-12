import React from 'react'
import { ButtonVolver } from '../components/ButtonVolver'
import "../styles/Github.css";
import { Card } from "../components/Card";

type Props = {}

 export const Github = (props: Props) => {
  return (
    <main className='container-github'>
      <article>
        <div className='container-boton-volver'>
					<ButtonVolver></ButtonVolver>
				</div>
        <h1>GitHub</h1>
        <div className='box-card'>
          <Card></Card>
        </div>
      </article>
    </main>
  )
}