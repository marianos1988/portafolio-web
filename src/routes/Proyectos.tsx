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
                Link Github: https://github.com/marianos1988/sys-gym
              </p>
            </div>
            <div className="carrousel-proyecto">
              <Carousel project={''}></Carousel>
            </div>
          </div> 
          
        </div>
      </article>
    </main>
  )
}