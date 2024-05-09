import React from 'react'

function PriceWrapper({title ,price, subtitle ,text , f1, f2, f3 , tag}) {
  return (
    <div className="col-md-4">
                        <div className="price-box">
                            <ul className="pricing-list">
                                <li className="price-title">{title}</li>
                                <li className="price-value">{price}</li>
                                <li className="price-subtitle">{subtitle}</li>
                                <li className="price-text"><i className="fas fa-check blue"></i>{text}</li>
                                <li className="price-text"><i className="fas fa-check blue"></i>{f1}</li>
                                <li className="price-text"><i className="fas fa-check blue"></i>{f2}</li>
                                <li className="price-text"><i className="fas fa-check blue"></i>{f3}</li>
                                <li className="price-tag-line"><a href="#">{tag}</a></li>
                            </ul>
                        </div>
                    </div>
  )
}

export default PriceWrapper