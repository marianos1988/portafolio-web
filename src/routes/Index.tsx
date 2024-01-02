import React from 'react'
import "../styles/Index.css"
import { ButtonIngresar } from '../components/ButtonIngresar'

export const Index = () => {
  return (
    <main className='container-index'>
      <div className='box-btn-ingresar'>
        <ButtonIngresar texto={"Ingresar"}></ButtonIngresar>
      </div>

      <section className="banner">
          
          <img className='foto-yo' src="http://localhost:5173/src/img/yo.jpg" alt="Foto de MSY" />

        <div className="banner-content">
          <h2>Bienvenido!</h2>
          <h2>Portafolio MSY</h2>
          <p>
            Soy Mariano Szencis Yans, soy un Desarrollador Full Stack y estoy encantado de poder mostrar mi talento en mi sitio web. Ingresa para ver quien soy....
          </p>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z"
        />
      </defs>
      <g className="waves">
        <use
          href="#gentle-wave"
          x="50"
          y="0"
          fill="#03ffff"
          opacity=".2"
        />
        <use
          href="#gentle-wave"
          x="50"
          y="3"
          fill="#03ffff"
          opacity=".5"
        />
        <use
          href="#gentle-wave"
          x="50"
          y="6"
          fill="#03ffff"
          opacity=".9"
        />
      </g>
      </svg>
    </main>
  )
}