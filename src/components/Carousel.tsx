
import "../styles/Carousel.css"


type Props = {
  project: string
}


export const Carousel = ({ project }: Props) => {


  return (
    <>
      <div className="carousel-wrapper">
        <div id="item-1"></div>
        <div id="item-2"></div>
        <div id="item-3"></div>

        <div className="carousel-item item-1">
          <a href="#item-3" className="arrow-prev arrow"></a>
          <a href="#item-2" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-2">
          <a href="#item-1" className="arrow-prev arrow"></a>
          <a href="#item-3" className="arrow-next arrow"></a>
        </div>

        <div className="carousel-item item-3">
          <a href="#item-2" className="arrow-prev arrow"></a>
          <a href="#item-1" className="arrow-next arrow"></a>
        </div>

      </div>
    </>
    
  )
}