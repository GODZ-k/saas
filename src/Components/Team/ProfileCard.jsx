import React from 'react'

function ProfileCard({name ,avatar, position , intro ,twitter ,pintrest ,linkedin ,dribble}) {
  return (
    <div className="col-sm-12 col-md-4">
                    <div className="team-item">
                        <div className='flex justify-center items-center'>
                        <img src={avatar} className="team-img" alt="pic"/>
                        </div>
                        <h3>{name}</h3>
                        <div className="team-info"><p>{position}</p></div>
                        <p>{intro}</p>
                        <ul className="team-icon">
                            <li><a href={twitter} className="twitter"><i className="fab fa-twitter"></i></a></li>
                            <li><a href={pintrest} className="pinterest"><i className="fab fa-pinterest"></i></a></li>
                            <li><a href={linkedin} className="facebook"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href={dribble} className="dribble"><i className="fab fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
  )
}

export default ProfileCard