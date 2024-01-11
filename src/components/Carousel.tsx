import { useState } from 'react';
import "../styles/Carousel.css";

type Props = {
    cant: number
}

export const Carousel = ({ cant }: Props) => {

 const [cantFotos, setCantFotos ] = useState(1);


 const nextTo = (num:number) => {
  if(num === cant) setCantFotos(1);   
  else setCantFotos(cantFotos+1);
  }

 
 const previousTo = (num:number) => {
  if(num === 1) setCantFotos(cant);
  else setCantFotos(cantFotos-1);
 }
  
  return (
    <div className={`container-carousel carousel-sys-gym-${cantFotos}`}>
      <img src="./src/assets/izquierda.png" alt="Left" className='left' onClick={()=>nextTo(cantFotos)}/>
      <img src="./src/assets/derecha.png" alt="Right" className='right' onClick={()=>previousTo(cantFotos)}/>
    </div>
  )
}