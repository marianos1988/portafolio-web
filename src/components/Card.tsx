import React from 'react'
import "../styles/Card.css"

type Props = {
  tittle: string
}

export const Card = ({ tittle }: Props) => {
  return (
    <div className="cards">
      <label id="summary">
        <input type="checkbox" />
        <article>
          <div className="front">
            <header>
              <h2>Mostrar {tittle}</h2>
            </header>
            <img src={`/src/assets/${tittle}.png`} alt={tittle} />
          </div>
          <div className="back">
            <header>
            </header>
            <img src={`/src/assets/${tittle}.png`} alt={tittle} />
            {
              (tittle === "GitHub") 
              
              ? (
                  <a href="https://github.com/marianos1988" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
              )
              : (tittle === "Email") 
                
                ? (
                  <a href="mailto:mariano.floresta@hotmail.com" target='_blank'><div className='btn-acceder btn-acceder-email'>mariano.floresta@hotmail.com</div></a>
                  
                )
                :("")
            }

          </div>
        </article>
      </label>
    </div>
  )
}