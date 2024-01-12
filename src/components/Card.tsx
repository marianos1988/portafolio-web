import React from 'react'
import "../styles/Card.css"

type Props = {}

export const Card = (props: Props) => {
  return (
    <div className="cards">
      <label id="summary">
        <input type="checkbox" />
        <article>
          <div className="front">
            <header>
              <h2>Mostrar GitHub</h2>
            </header>
            <img src="/src/assets/github.png" alt="Github" />
          </div>
          <div className="back">
            <header>
            </header>
            <img src="/src/assets/github.png" alt="Github" />
            <a href="https://github.com/marianos1988" target='_blank'><div className='btn-acceder'>Ingresar a GitHub</div></a>
          </div>
        </article>
      </label>
    </div>
  )
}