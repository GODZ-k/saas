import React from 'react'

function BlogCard({image , title , timestamp , content}) {
  return (
    <div class="col-md-4">
    <div class="blog-item">
        <div class="popup-wrapper">
            <div class="popup-gallery w-full">
                <a href="#">
                    <img src={image} class="width-100" alt="pic"/>
                    <span class="eye-wrapper2"><i class="fa fa-link eye-icon"></i></span>
                </a>
            </div>
        </div>
        <div class="blog-item-inner">
            <h3 class="blog-title"><a href="#">{title}</a></h3>
            <a href="#" class="blog-icons last"><i class="pe-7s-date"></i>{timestamp}</a>
            <p>{content}</p>                    
        </div>
    </div>  
</div>
  )
}

export default BlogCard