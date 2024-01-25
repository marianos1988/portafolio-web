
import "../styles/Instagram.css";
import { ButtonVolver } from '../components/ButtonVolver';
import { Card } from '../components/Card';


export const Instagram = () => {
  return (
    <main className='container-instagram'>
      <article>
        <div className='container-boton-volver'>
          <ButtonVolver></ButtonVolver>
        </div>
        <h1>Instagram</h1>
        <div className='box-card'>
          <Card
            tittle='Instagram'
          />
        </div>
      </article>
    </main>
  )
}