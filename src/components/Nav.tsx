import "../styles/Home.css"
import React from 'react'

type Props = {
  id: number,
  tittle: string,
  subtittle1: string,
  subtittle2: string,
  subtittle3: string

}

export const Nav = ({ id,tittle,subtittle1,subtittle2,subtittle3 }: Props) => {
  return (
    <div key={id}>
      <h2>{tittle}</h2>
      <nav>
        <a style={{ animationDelay: "0.8s" }}>{subtittle1}</a>
        <a style={{ animationDelay: "0.9s" }}>{subtittle2}</a>
        <a style={{ animationDelay: "1s" }}>{subtittle3}</a>
      </nav>
    </div>
  )
}