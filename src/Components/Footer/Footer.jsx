import React from 'react'

function Footer() {
  return (
    <div className="footer">
    <div className="container-fluid px-0">
        <div className="row no-gutters mx-0">
            <div className="col-md-4 footer-white-box text-center">
                <i className="pe-7s-map-2"></i>
                <h5>Get In Touch</h5>
                <p>10 Oxford Street, London, UK, E1 1EC</p>
                <p><a href="mailto:contact@youremail.com">the-office@square.co.uk</a></p>
                <p>+44 987 654 321</p>
            </div>
            <div className="col-md-4 footer-dark-grey-box text-center">
                <i className="pe-7s-comment"></i>
                <h5>Social Media</h5>
                <p>See bellow where you can find us.</p>
                <ul className="footer_social">
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-skype"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribble"></i></a></li>
                </ul>
            </div>
            <div className="col-md-4 footer-grey-box text-center">
                <i className="pe-7s-link"></i>
                <h5>Useful Links</h5>
                <a href="#" className="footer-links">Our Cookies Policy</a>
                <a href="#" className="footer-links">Meet The Team Behind Square</a>
                <a href="#" className="footer-links">Terms and Conditions</a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 footer-bottom text-center">
               
                <p>Copyright © 2019 <strong>Square</strong>. Designed by <a href="https://themeforest.net/user/epic-themes/portfolio?ref=Epic-Themes" target="_blank">Epic-Themes</a></p>
                
            </div>
        </div>
    </div>            
</div>
  )
}

export default Footer