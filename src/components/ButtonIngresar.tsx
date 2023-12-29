import React from 'react'
import "../styles/ButtonIngresar.css" 
import { useNavigate } from 'react-router-dom';

type Props = {
  texto: string
}

export const ButtonIngresar = ({ texto }: Props) => {
  const navigate = useNavigate();
  const handleIngresarPage = ()=> navigate("/home.html");
  return (
    <>
      <button className='btn-ingresar' onClick={handleIngresarPage}>{texto}</button>
    </>
  )
}