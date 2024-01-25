import React from 'react'
import "../styles/Skills.css"
import { ButtonVolver } from '../components/ButtonVolver'
import Radio  from '@mui/material/Radio';


 export const Skills = () => {
  return (
    <main className='container-skills'>
      <article>
          <div className='container-boton-volver'>
            <ButtonVolver></ButtonVolver>
          </div>
          <h1>Mis Skills:</h1>
          <div className='container-box-skills'>
            <div className='box-skills'>
              <div className='tittle-skills'>HTML5</div>
              <img src="src/img/logos/html5.png" alt="HTML5" />
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>CSS</div>
              <img src="src/img/logos/css.png" alt="CSS" />
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Javascript</div>
              <img src="src/img/logos/javascript.png" alt="Javascript" className='img-javascript'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>React</div>
              <img src="src/img/logos/react.png" alt="Reactjs" className='img-react'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>NodeJS</div>
              <img src="src/img/logos/nodejs.png" alt="NodeJs" className='img-nodejs'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Python</div>
              <img src="src/img/logos/python.png" alt="Python" className='img-python'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>MySQL</div>
              <img src="src/img/logos/mysql.png" alt="Mysql" className='img-mysql'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Git-Github</div>
              <img src="src/img/logos/git-github.png" alt="Git-Github" className='img-gitgithub' />
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
            <div className='box-skills'>
              <div className='tittle-skills'>Typescript</div>
              <img src="src/img/logos/typescript.png" alt="Typescript" className='img-typescript'/>
              <div className='points-skills'>
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
                <Radio
                  checked={true}
                  color='success'
                  size='medium'
                />
              </div>
            </div>
          </div>
          
      </article>
    </main>
  )
}