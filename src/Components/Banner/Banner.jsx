import React from 'react'

function Banner() {
  return (
  <>
    <section className="section-blue small-paddings" id="newsletter-section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center padding-top-50 padding-bottom-20">

                <h3 className="white-text text-3xl font-bold">Ready to make your sales team more productive?<br/>
                Please enter your email to get started.</h3>

            </div>
            <div className="col-md-12 padding-bottom-40">

                <div className="newsletter_form_wrapper" data-wow-delay="0.25s">
                    <div className="newsletter_form_box">
                        
                        <p className="newsletter_success_box" >We received your message and you'll hear from us soon. Thank You!</p>
                        <form id="newsletter-form" className="newsletter-form" action="php/newsletter.php" method="post">

                            <input id="email_newsletter" type="email" name="nf_email" placeholder="Enter Your Email Address"/>  

                            <input type="submit" value="GET STARTED!" id="submit-button-newsletter"/>

                        </form>
                        
                    
                    </div>
        
                </div>

            </div>        </div>

    </div>
 

</section></>
  )
}

export default Banner