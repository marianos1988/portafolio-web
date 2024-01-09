
import "../styles/Carousel.css"


type Props = {
  project: string
}


export const Carousel = ({ project }: Props) => {


  return (
    <>
      <div className="carousel-wrapper">
        <div id="item-1-sys-gym"></div>
        <div id="item-2-sys-gym"></div>
        <div id="item-3-sys-gym"></div>
        <div id="item-4-sys-gym"></div>
        <div id="item-5-sys-gym"></div>
        <div id="item-6-sys-gym"></div>
        <div id="item-7-sys-gym"></div>

        <div className="carousel-item item-1-sys-gym">
          <a href="#item-7-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-2-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-2-sys-gym">
          <a href="#item-1-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-3-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-3-sys-gym">
          <a href="#item-2-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-4-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-4-sys-gym">
          <a href="#item-3-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-5-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-5-sys-gym">
          <a href="#item-4-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-6-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-6-sys-gym">
          <a href="#item-5-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-7-sys-gym" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-7-sys-gym">
          <a href="#item-6-sys-gym" className="arrow-prev arrow"></a>
          <a href="#item-1-sys-gym" className="arrow-next arrow"></a>
        </div>

      </div>
    </>
    
  )
}