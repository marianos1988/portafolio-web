import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Home.css";
import { Nav } from "../components/Nav";



const data = [
  { 
    id: 1,
    tittle: "Sobre mi",
    subtittle1: "Perfil",
    subtittle2: "Skills",
    subtittle3: "Educacion",
  },
  { 
    id: 2,
    tittle: "Portafolio",
    subtittle1: "Trabajos",
    subtittle2: "Proyectos",
    subtittle3: "GitHub",
  },
  { 
    id: 3,
    tittle: "Contacto",
    subtittle1: "Email",
    subtittle2: "Instagram",
    subtittle3: "LinkedIn",
  },
]

export const Home = () => {



  
    return (
      <>
        <main className="container-home">
          <div className={`background open`}></div>
          <div className={`menu open`}>
            <Swiper speed={750} modules={[Navigation]} navigation>

              {
                data.map(data => (
                  <SwiperSlide key={data.id}>
                    <Nav
                      id={data.id}
                      key={data.id}
                      tittle={data.tittle}
                      subtittle1={data.subtittle1}
                      subtittle2={data.subtittle2}
                      subtittle3={data.subtittle3}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </main>
      </>
    );
  
}