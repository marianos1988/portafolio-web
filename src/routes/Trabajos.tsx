import React from 'react'
import "../styles/Trabajos.css"
import { ButtonVolver } from '../components/ButtonVolver'


export const Trabajos = () => {
  return (
		<main className='container-trabajos'>
		<article>
				<div className='container-boton-volver'>
					<ButtonVolver></ButtonVolver>
				</div>
				<h1>Trabajos</h1>
				<div className='container-box-trabajos'>
					<div className='box-trabajo'>
						<div className='fechas-trabajo'>Jul. 2010 - Actualidad</div>
						<div className='desc-trabajo'>
							<h2>Soporte de aplicaciones a usuarios - Administrador de redes</h2>
							<p>
								- Brindar al usuario soporte por diferentes medios para buscar una solución al problema del mismo, ya sean físicas (hardware) o lógicas (software) de cualquier tipo de dispositivo electrónico.
              </p>
              <p>
                - Responsable de tareas de monitoreo de consumo ancho de banda, armado de politicas y reglas para salidas a internet. Estructuración y separación de redes lógicas a través de Vlans. Equipo Administrable Fortinet.
              </p>
						</div>
					</div>
				</div>
		</article>
	</main>
  )
}