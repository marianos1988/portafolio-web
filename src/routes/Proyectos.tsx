import React from 'react'
import { ButtonVolver } from '../components/ButtonVolver'
import "../styles/Proyectos.css"
import { Carousel } from '../components/Carousel'


export const Proyectos = () => {

  
  return (
    <main className='container-proyectos'>
      <article>
        <div className='container-boton-volver'>
          <ButtonVolver></ButtonVolver>
        </div>
        <h1>Mis Proyectos:</h1>
        <div className='container-box-proyectos'>
          <div className='box-proyectos'>
            <div className='desc-proyecto'>
              <h4>Dic. 2022 - Mar. 2023</h4>
              <h2>Sys Gym: </h2>
              <p>
                Gracias a mi gran desempeño y dedicación, logré armar mi primer proyecto, un sistema de administración de socios y caja para un gimnasio. Este sistema permite administrar los pagos y la morosidad de cada socio, notifica la fecha de cumpleaños de los mismos y realiza reportes diarios de la caja descargando en PDF.
                <br />
                <br />
                Link Github: <a href="https://github.com/marianos1988/sys-gym" target="_blank">https://github.com/marianos1988/sys-gym</a>
              </p>
            </div>
            <div className="carrousel-proyecto">
              <Carousel cant={7}></Carousel>
            </div>
          </div>

          <div className='box-proyectos'>
            <div className='desc-proyecto'>
              <h4>Sep. 2023 - Sep. 2023</h4>
              <h2>Sitio web www.jbombicino.com.ar</h2>
              <p>
                Desarrollé una pagina web estática 100% personalizada y construida con HTML5, CSS, y Javascript para la Clinica O. Bombicino.
                <br />
                Es una gran muestra de mis habilidades, del buen manejo que llevo para diseñar una pagina web responsive adaptable a cualquier dispositivo.
                <br />
                Sitio web: <a href="https://www.jbombicino.com.ar/" target="_blank">https://www.jbombicino.com.ar</a>
                <br />
                Link Github: <a href="https://github.com/marianos1988/web-clinica-jb" target="_blank">https://github.com/marianos1988/web-clinica-jb</a>
              </p>
            </div>
            <div className="carrousel-proyecto">

            </div>
          </div> 
          
        </div>
      </article>
    </main>
  )
}