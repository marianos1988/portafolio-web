import { useState } from 'react';
import "../styles/Carousel.css";
import imgLeft from "../assets/izquierda.png"
import imgRight from "../assets/derecha.png"

type Props = {
    cant: number
    project: string
}

export const Carousel = ({ cant, project }: Props) => {

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
    <div className="container-carousel">
      {
        (cantFotos <= cant) && (
          <a href={`/src/assets/img/proyectos/${project}${cantFotos}.jpeg`} target="_blank"><div className={`carousel-${project}-${cantFotos}`}></div></a>
        )
      }
      <img src={imgLeft} alt="Left" className='left' onClick={()=>nextTo(cantFotos)}/>
      <img src={imgRight} alt="Right" className='right' onClick={()=>previousTo(cantFotos)}/>
    </div>
  )
}