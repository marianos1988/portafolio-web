
import "../styles/Skills.css"
import { ButtonVolver } from '../components/ButtonVolver';
import HTML from "../assets/img/logos/html5.png";
import CSS from "../assets/img/logos/css.png";
import javascript from "../assets/img/logos/javascript.png";
import react from "../assets/img/logos/react.png";
import nodeJS from "../assets/img/logos/nodejs.png";
import python from "../assets/img/logos/python.png";
import mysql from "../assets/img/logos/mysql.png";
import gitGithub from "../assets/img/logos/git-github.png";
import typescript from "../assets/img/logos/typescript.png";
import pointGreen from "../assets/point-green.png";
import pointBlack from "../assets/point-black.png";

 
 export const Skills = () => {
  return (
    <main className='container-skills'>
      <article>
          <div className='container-boton-volver'>
            <ButtonVolver></ButtonVolver>
          </div>
          <h1>Skills:</h1>
          <div className='container-box-skills'>
            <div className='box-skills'>
              <div className='tittle-skills'>HTML5</div>
              <img src={HTML} alt="HTML5" />
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>CSS</div>
              <img src={CSS} alt="CSS" />
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Javascript</div>
              <img src={javascript} alt="Javascript" className='img-javascript'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>React</div>
              <img src={react} alt="Reactjs" className='img-react'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>NodeJS</div>
              <img src={nodeJS} alt="NodeJs" className='img-nodejs'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Python</div>
              <img src={python} alt="Python" className='img-python'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointBlack} />
                <img src={pointBlack} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>MySQL</div>
              <img src={mysql} alt="Mysql" className='img-mysql'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Git-Github</div>
              <img src={gitGithub} alt="Git-Github" className='img-gitgithub' />
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Typescript</div>
              <img src={typescript} alt="Typescript" className='img-typescript'/>
              <div className='points-skills'>
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
                <img src={pointGreen} />
              </div>
            </div>
          </div>
          
      </article>
    </main>
  )
}