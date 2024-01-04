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
                <img src="https://bit.ly/3Y5oMQG" alt="" />
              </div>
              <div className="content">
                <h2>Mariano Szencis Yans</h2>
                  <span>Desarrollador Full Stack</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo vitae eum in odit expedita, sit officia, hic et deserunt dolor ex? Accusamus, soluta beatae. Tenetur animi nam expedita necessitatibus.
            </p>
          </div>

        </article>
      </main>
    </>
  )
}