import React from 'react'
import ProfileCard from './ProfileCard'

function Team() {
  return (
    <section className="section-grey section-top-border" id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title">The Team Behind Square</h2>
                    <p className="section-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority<br/>have suffered alteration, by injected humour, or new randomised words.</p>

                </div>
                <ProfileCard name="CHRISTINA HAWKINS" avatar="team-pic.jpeg" intro="Johnathan is our  co-founder and has developed search strategies for a variety of clients for over 5 years." twitter="#" pintrest="#" dribble="#" linkedin="#" position="Head of Seo"/>
                <ProfileCard name="CHRISTINA HAWKINS" avatar="team-pic.jpeg" intro="Johnathan is our  co-founder and has developed search strategies for a variety of clients for over 5 years." twitter="#" pintrest="#" dribble="#" linkedin="#" position="Head of Seo"/>
                <ProfileCard name="CHRISTINA HAWKINS" avatar="team-pic.jpeg" intro="Johnathan is our  co-founder and has developed search strategies for a variety of clients for over 5 years." twitter="#" pintrest="#" dribble="#" linkedin="#" position="Head of Seo"/>
            </div>        
        </div>
    </section>
  )
}

export default Team