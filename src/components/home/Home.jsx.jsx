import desayunoAmericano from "./desayunoAmericano.jpg";
import desayunoSalchicha from "./desayunoSalchicha.jpg";
import kiwiSaludable from "./kiwiSaludable.jpg";
import tamalPipian from "./tamal_pipian.jpg";

function Home(){
    return(
          <div>     
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>*/}
                  <img src={desayunoAmericano} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>

                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>Example headline.</h1>
                      <p>Some representative placeholder content for the first slide of the carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>*/}
                  <img src={desayunoSalchicha} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>

                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>*/}
                  <img src={kiwiSaludable} class="d-block w-100" alt="kiwi Saludable" width="1100" height="500"/>

                  <div class="container">
                    <div class="carousel-caption text-end">
                      <h1>One more for good measure.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>


            {/* Marketing messaging and featurettes*/}
            
              {/* Wrap the rest of the page in another container to center all the content. */}

            <div class="container marketing p-4">
              <h3 >Categorias</h3>

              {/* Three columns of text below the carousel */}

              <div class="row p-4 col-mb-3" >
                
                {/* Desayunos Tradicionales */}
                <div class="col-lg-4">
                  <svg class="bd-placeholder-img rounded-circle" width="140" height="140"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" fill="#777" dy=".3em">140X140</text>
                        <img src={tamalPipian} alt="" />
                  </svg>

                  <h2 class="fw-normal">Desayunos Tradicionales</h2>
                  <p>Encuentra aquí tu desayuno elaborado con los más ricos y deliciosos productos tradiconales de la región</p>
                  <p><a class="btn btn-secondary" href="#" >Detalles »</a></p>
                  
                </div>{/*/.col-lg-4 */}
                
                
                {/* Desayunos Saludables */}
                <div class="col-lg-4 ">
                  <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" ><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                  <h2 class="fw-normal">Desayunos Saludables</h2>
                  <p>Aquí encontrarás tu desayuno saludable para que mantengas una dieta rica en proteinas y vitaminas</p>
                  <p><a class="btn btn-secondary" href="#">View details »</a></p>
                </div>{/*/.col-lg-4 */}
                
              </div>{/* /.row */}

            </div> {/* /.container */}

          </div>
    );
}

export default Home;