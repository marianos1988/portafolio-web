import "../styles/Perfil.css"
import { ButtonVolver } from '../components/ButtonVolver'




export const Perfil = () => {
  return (
    <>
 
      <main className='container-perfil'>
        <article>
          <div className='container-boton-volver'>
            <ButtonVolver></ButtonVolver>
          </div>
          <div className='box-photo-text'>
            <div className="box-perfil">
              <div className="imgBox">
                <img src="src/img/perfil.jpg" alt="Perfil" />
              </div>
              <div className="content">
                <h2>Mariano Szencis Yans</h2>
                  <span>Desarrollador Full Stack</span>
              </div>
            </div>
            <p>Soy un desarrollador Full Stack con mas de 2 años trabajando de manera Freelance con proyectos 100% propios. Poseo conocimientos en HTML, CSS, Javascript, NodeJS, Express, ReactJS, Typescript y MySQL. Mi meta trazada es seguir aprendiendo y aceptar nuevos desafíos que me propongan.
            </p>
          </div>

        </article>
      </main>
    </>
  )
}