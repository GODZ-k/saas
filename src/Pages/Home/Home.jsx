import React from 'react'
import "./Home.css"
import { About,AccordionExpandDefault, Banner, Benifits, Blog, Contact, DempBanner, Features, Feedbacks, Footer, Header, HeroSec, Info, Price, Promotion, Questions, Slider, Team } from '../../Components'
function Home() {
  return (
    <div>
         <Header/>
      <HeroSec/>
<About/>
<Info/>
<Promotion/>
<Banner/>
<Features/>
<AccordionExpandDefault/>
<Team/>
<Slider/>
<Benifits/>
<Feedbacks/>
<Price/>
<DempBanner/>
<Questions/>
<Blog/>
<Contact/>
<Footer/>
    </div>
  )
}

export default Home