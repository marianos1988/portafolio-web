
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
              <Carousel cant={7} project='sys-gym'></Carousel>
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
                <br />
                Sitio web: <a href="https://www.jbombicino.com.ar/" target="_blank">https://www.jbombicino.com.ar</a>
                <br />
                <br />
                Link Github: <a href="https://github.com/marianos1988/web-clinica-jb" target="_blank">https://github.com/marianos1988/web-clinica-jb</a>
              </p>
            </div>
            <div className="carrousel-proyecto">
              <Carousel cant={3} project='jbombicino'></Carousel>
            </div>
          </div> 

          <div className='box-proyectos'>
            <div className='desc-proyecto'>
              <h4>Ago. 2023 - Dec. 2023</h4>
              <h2>Sys Turnos:</h2>
              <p>
              Este es mi segundo sistema terminado por mi, que administra los turnos en una peluquería, pueden cargar un turno nuevo con los datos requeridos, y luego podes filtrar por fecha, editarlos y eliminarlos.
              <br />
              Este proyecto es una gran muestra de como utilizo las aptitudes mencionadas.
              <br />
              El proyecto esta subido en mi repositorio en GitHub.
              <br />
              <br />
              Proyecto en Github: https://github.com/marianos1988/sys-turnos
              <br />
              <br />
              Proyecto para probar (Solo Frontend): https://sys-turnos.netlify.app/
              </p>
            </div>
            <div className="carrousel-proyecto">
              <Carousel cant={4} project='sys-turnos'></Carousel>
            </div>
          </div> 
          
        </div>
      </article>
    </main>
  )
}