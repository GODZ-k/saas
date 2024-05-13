import React from 'react'

function Contact() {
  return (
    <section className="section-white no-padding section-top-border overflow-x-hidden" id="contact">
        <div className="container-fluid px-0">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <iframe className="contact-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" width="900" height="630"  allowfullscreen></iframe>
                </div>
                <div className="col-md-6 margin-top-70">
                    <div className="small-col-inside">
                        <h3 className="margin-bottom-5 font-bold text-3xl mb-3">Get in touch</h3>
                        <p>Contact us today for a free, no obligation quote.</p>
                        <p className="contact_success_box">We received your message and you'll hear from us soon. Thank You!</p>
                        <form id="contact-form" className="contact" action="php/contact.php" method="post">
                            <input className="contact-input white-input" required="" name="contact_names" placeholder="Full Name*" type="text" />
                            <input className="contact-input white-input" required="" name="contact_email" placeholder="Email Adress*" type="email"/>
                            <input className="contact-input white-input" required="" name="contact_phone" placeholder="Phone Number*" type="text"/>
                            <textarea className="contact-commnent white-input py-2 px-2.3 text-sm" rows="2" cols="20" name="contact_message" placeholder="Your Message..."></textarea>
                            <input value="Send Message" id="submit-button" className="contact-submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact