import React from 'react'

function Benifits() {
  return (
    <section className="section-white section-bottom-border">
        <div className="container">
            <div className="row">
                <div className="col-md-6 padding-top-20">
                    <h3 className=' font-bold text-3xl mb-3'>Get ready to discover all the benefits and secrets of our amazing software.</h3>
                    <p>Velis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt neque et poris ratione sequi enim quia tempor magni.</p>
                    <ul className="benefits">
                        <li><i className="fa fa-check"></i> Quia magni netsum eos qui ratione sequi.</li>
                        <li><i className="fa fa-check"></i> Venis ratione sequi enim quia tempor magni.</li>
                        <li><i className="fa fa-check"></i> Enim ipsam voluptatem quia voluptas.</li>
                    </ul>
                    <a href="#contact" className="btn-blue scrool">Get Started</a>
                </div>
                <div className="col-md-6">
                    <img src="graph.png" className="hero-image width-100 box-shadow" alt="pic"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benifits