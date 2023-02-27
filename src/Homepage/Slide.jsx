import React from 'react'

function Slide() {
  return (
    <>
    <div className='slidebox'> 
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="d-block-w-100" src="voteimg.webp" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img className="d-block-w-100" src="voteimg4.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img className="d-block-w-100" src="votingimg2.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>















    </div>


    </>

  )
}

export default Slide
