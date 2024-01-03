import "../styles/Home.css"
import React from 'react'
import { NavLink } from "react-router-dom";

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
        <NavLink to={`/${subtittle1}`}><div className="nav-pointer" style={{ animationDelay: "0.8s" }}>{subtittle1}</div></NavLink>
        <NavLink to={`/${subtittle2}`}><div className="nav-pointer" style={{ animationDelay: "0.9s" }}>{subtittle2}</div></NavLink>
        <NavLink to={`/${subtittle3}`}><div className="nav-pointer" style={{ animationDelay: "1s" }}>{subtittle3}</div></NavLink>
      </nav>
    </div>
  )
}