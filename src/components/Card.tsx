
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
            <img className={`img-${tittle}`} src={`/src/assets/${tittle}.png`} alt={tittle} />
          </div>
          <div className="back">
            <header>
            </header>
            
            {
              (tittle === "GitHub") 
              
              ? ( 
                  <>
                    <img src={`/src/assets/${tittle}.png`} alt={tittle} />
                    <a href="https://github.com/marianos1988" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
                  </>

              )
              : (tittle === "Email") 
                
                ? (
                  <>
                    <img src={`/src/assets/${tittle}.png`} alt={tittle} />
                    <a href="mailto:mariano.floresta@hotmail.com" target='_blank'><div className='btn-acceder btn-acceder-email'>mariano.floresta@hotmail.com</div></a>
                  </>
                )
                : (tittle === "Instagram") 
                  
                  ? (
                    <>
                      <img className="img-perfil-instagram" src={"https://lh3.googleusercontent.com/okP6REqctlZugw9Jq3hrBkw4ABRNBm-MymhVxOzNuepgHmankDzIjCKy6E_FCpkwvwmxLQ=s85"} alt={tittle} />
                      <a href="https://www.instagram.com/mariano.floresta/" target='_blank'><div className='btn-acceder'>Ingresar a {tittle}</div></a>
                    </>

                    )
                  : (tittle === "LinkedIn") && (
                    <>
                      <img src={`/src/assets/${tittle}.png`} alt={tittle} />
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