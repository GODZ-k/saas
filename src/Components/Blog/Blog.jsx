import React from 'react'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <section className="section-grey w-full flex justify-center items-center flex-wrap" id="blog" >
        <div className=" lg:px-[15%] md:px-[8%] sm:px-[8%] px-[3%]">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title font-bold text-3xl mb-3">Our Blog</h2>
                    
                    <p className="section-subtitle">Latest news, tips and best practices.</p>
                </div>
            </div>
            <div className="row">
                <BlogCard image="blog-img.jpeg" title="The Guide To LinkedIn Ads" timestamp="August 1st, 2019" content="Quis autem velis nets reprehender net etid quiste voluptate velite est quam nihis etsa sedit varias."/>
              
                <BlogCard image="blog-img.jpeg" title="The Guide To LinkedIn Ads" timestamp="August 1st, 2019" content="Quis autem velis nets reprehender net etid quiste voluptate velite est quam nihis etsa sedit varias."/>
                <BlogCard image="blog-img.jpeg" title="The Guide To LinkedIn Ads" timestamp="August 1st, 2019" content="Quis autem velis nets reprehender net etid quiste voluptate velite est quam nihis etsa sedit varias."/>

                
            </div>
        </div>
    </section>
  )
}

export default Blog