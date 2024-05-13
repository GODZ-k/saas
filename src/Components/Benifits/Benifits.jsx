import React from 'react'

function Benifits() {
  return (
    <section class="section-white section-bottom-border">
        <div class="container">
            <div class="row">
                <div class="col-md-6 padding-top-20">
                    <h3 className=' font-bold text-3xl mb-3'>Get ready to discover all the benefits and secrets of our amazing software.</h3>
                    <p>Velis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt neque et poris ratione sequi enim quia tempor magni.</p>
                    <ul class="benefits">
                        <li><i class="fa fa-check"></i> Quia magni netsum eos qui ratione sequi.</li>
                        <li><i class="fa fa-check"></i> Venis ratione sequi enim quia tempor magni.</li>
                        <li><i class="fa fa-check"></i> Enim ipsam voluptatem quia voluptas.</li>
                    </ul>
                    <a href="#contact" class="btn-blue scrool">Get Started</a>
                </div>
                <div class="col-md-6">
                    <img src="graph.png" class="hero-image width-100 box-shadow" alt="pic"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benifits