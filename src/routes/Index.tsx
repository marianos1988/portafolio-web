
import "../styles/Index.css"
import { ButtonIngresar } from '../components/ButtonIngresar'
import imgIndex from "../assets/img/yo.jpg"

export const Index = () => {
  return (
    <main className='container-index'>
      <div className='box-btn-ingresar'>
        <ButtonIngresar texto={"Ingresar"}></ButtonIngresar>
      </div>

      <section className="banner">
          
          <div className='card-index'>
            
            <img className='foto-yo' src={imgIndex} alt="Foto de MSY" />
            <h3>Mariano Szencis Yans</h3>
            <h3>Web Developer</h3>
          </div>



        <div className="banner-content">
          <h2>Bienvenido!</h2>
          <h2>Portafolio MSY</h2>
          <p>
            Soy un Desarrollador Full Stack y estoy encantado de poder mostrar mi talento en mi sitio web. Ingresa para conocerme mas...
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