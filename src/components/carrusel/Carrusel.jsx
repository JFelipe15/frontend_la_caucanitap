import desayunoAmericano from "./desayunoAmericano.jpg";
import desayunoSalchicha from "./desayunoSalchicha.jpg";
import kiwiSaludable from "./kiwiSaludable.jpg";

function Carrusel(){
    return(        
    <div class="container mt-3">

          {/*The carousel*/}
          <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="500" data-pause="haover">
        
          {/* Indicators */}
          <ul class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ul>
          
          {/* The slideshow */}
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval ="10000">
              <img src={desayunoAmericano} alt="Desayuno Americano" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={desayunoSalchicha} alt="Desayno con Salchicha" width="1100" height="500"/>
            </div>
            <div class="carousel-item" data-bs-interval="">
              <img src={kiwiSaludable} alt="Desayuno Saludable" width="1100" height="500"/>
            </div>
          </div>
          
          {/*Left and right controls*/}
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        
        </div>
        
        
    );
}

export default Carrusel;