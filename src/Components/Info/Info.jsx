import React from 'react'

function Info() {

  
  return (
    <section className="section-grey section-top-border overflow-x-hidden">

    <div className="">
        <div className="row justify-center p-5">
            <div className="col-md-6 margin-top-20">

                <h3 className=' text-3xl font-bold mb-3'>Get Started Today</h3>

                <p className="margin-bottom-40">Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius sed aliquam etsim vitae netsum, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>

                <div className="nav flex-column nav-pills margin-right-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    
                        <div className="features-second">
                            
                            <div className="dropcaps-circle">
                                <i className="fas fa-chart-line"></i>
                            </div>

                            <h4 className="margin-bottom-5">Customize your workflow.</h4>

                            <p>Manage any process and be ready to address any challenge with total ease.</p>

                        </div>
                    </a>

                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        
                        <div className="features-second">

                            <div className="dropcaps-circle">
                                <i className="fas fa-network-wired"></i>
                            </div>

                            <h4 className="margin-bottom-5">Easy onboarding, fast adoption.</h4>

                            <p>With Square
getting your team on board is as simple as sending an email.</p>

                        </div>

                    </a>

                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        
                        <div className="features-second">

                            <div className="dropcaps-circle">
                                <i className="fas fa-rocket"></i>
                            </div>

                            <h4 className="margin-bottom-5">Improve subscriber retention.</h4>

                            <p>Analyze customers by region, discounts and more and put a plan in place.</p>

                        </div>
                    </a>

                </div>

            </div>
            
            <div className="col-md-6 md:w-[30%]">

                <div className="tab-content margin-left-20" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <img src="iphone-1.png" className="width-100" alt="pic" />
                    </div>

                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> 
                        <img src="iphone-1b.png" className="width-100" alt="pic" />
                    </div>

                    {/* <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <img src="images/iphone-1c.png" className="width-100" alt="pic" />
                    </div> */}

                </div>

            </div>
        </div>
        
    </div>

</section>
  )
}

export default Info