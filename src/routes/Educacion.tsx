import React from 'react'
import "../styles/Educacion.css"
import { ButtonVolver } from '../components/ButtonVolver'

export const Educacion = () => {
  return (
    <main className='container-educacion'>
      <article>
          <div className='container-boton-volver'>
            <ButtonVolver></ButtonVolver>
          </div>
          <h1>Mi Educacion</h1>
          <div className='container-box-educacion'>
            <div className='box-educacion'>
              <div className='fechas-educacion'>Mar. 1993 - Dic. 2000</div>
              <div className='desc-educacion'>
                <h2>Primario Completo</h2>
                <h3>Coronel de Marina Leonardo Rosales - Buenos Aires</h3>
              </div>
            </div>
            <div className='box-educacion'>
              <div className='fechas-educacion'>Mar. 2000 - Dic. 2005</div>
              <div className='desc-educacion'>
                <h2>Secundario Completo</h2>
                <h3>Comercial N° 30 Esteban Agustin Gascón, Buenos Aires</h3>
              </div>
            </div>
            <div className='box-educacion'>
              <div className='fechas-educacion'>Abr. 2023 - Actualidad</div>
              <div className='desc-educacion'>
                <h2>Ingles</h2>
                <h3>Me encuentro cursando actualmente de manera particular<br /><br /> Nivel: Intermedio
                </h3>
              </div>
            </div>
          </div>

      </article>
    </main>
  )
}