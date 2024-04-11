import imgGithub from "../assets/Github.png"
import imgEmail from "../assets/Email.png";
import imgInstagram from "../assets/Instagram.png";
import imgLinkedIn from "../assets/LinkedIn.png";
import imgInstaBack from "../assets/img/img-insta-back.jpg"
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
            {
              (tittle === "GitHub") 
                ? (<img className={`img-${tittle}`} src={imgGithub} alt={tittle} />)
                : (tittle === "Email") 
                    ? (<img className={`img-${tittle}`} src={imgEmail} alt={tittle} />)
                    : (tittle === "Instagram")
                        ? (<img className={`img-${tittle}`} src={imgInstagram} alt={tittle} />)
                        : (tittle === "LinkedIn") && (<img className={`img-${tittle}`} src={imgLinkedIn} alt={tittle} />)
            } 
              
          </div>
          <div className="back">
            <header>
            </header>
            
            {
              (tittle === "GitHub") 
              
              ? ( 
                  <>
                    <img src={imgGithub} alt={tittle} />
                    <a href="https://github.com/marianos1988" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
                  </>

              )
              : (tittle === "Email") 
                
                ? (
                  <>
                    <img src={imgEmail} alt={tittle} />
                    <a href="mailto:mariano.floresta@hotmail.com" target='_blank'><div className='btn-acceder btn-acceder-email'>mariano.floresta@hotmail.com</div></a>
                  </>
                )
                : (tittle === "Instagram") 
                  
                  ? (
                    <>
                      <img className="img-perfil-instagram" src={imgInstaBack} alt={tittle} />
                      <a href="https://www.instagram.com/mariano.floresta/" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
                    </>
                    )
                  : (tittle === "LinkedIn") && (
                    <>
                      <img src={imgLinkedIn} alt={tittle} />
                      <a href="https://www.linkedin.com/in/mariano-nicolas-szencis-yans-883b52252/" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
                    </>

                  ) 
            }
          </div>
        </article>
      </label>
    </div>
  )
}