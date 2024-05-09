import React from 'react'
import "./Home.css"
import { About, Banner, Benifits, Blog, Contact, DempBanner, Features, Footer, Header, HeroSec, Info, Price, Promotion, Questions, Team } from '../../Components'
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
<Team/>
<Benifits/>
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