
import "../styles/Email.css";
import { Card } from '../components/Card'
import { ButtonVolver } from '../components/ButtonVolver'

export const Email = () => {
  return (
    <main className='container-email'>
      <article>
        <div className='container-boton-volver'>
          <ButtonVolver></ButtonVolver>
        </div>
        <h1>Email</h1>
        <div className='box-card'>
          <Card 
            tittle='Email'
          />
        </div>
      </article>
    </main>
  )
}