import React, { useRef } from 'react'
import './modal.css'
import {Link} from 'react-router-dom'

function Modal({price, title, creator, dollar, imgs, main, link} ) {
  
  
  return (
    <div>
     
          <div className="com-content">
                <div className="title">
                    Thank you for for picking interest
                    <p className="title-two">{title}</p>
                </div>

                <div className="complete-buy">
                    
                        <div className="buy-content">
                            
                            <div className="buy-img-price">
                                <img className='compl-img' src={main} alt="" />
                                <div className="creator-price">
                                    <div className="creator-img-name">
                                        <img className='creator-img' src={imgs} alt="" />
                                        <p className='creator-name'>{creator}</p>
                                    </div>
                                    <div className="stars">
                                    <span className='rate'>Rating</span>  &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </div>
                                    <div className="the-prices">
                                            <div className='price'>Price</div>
                                            <div className='modal-price'>
                                            <div className='the-eth'>
                                                <img className='price-eth' src="assets/eth.png" alt="" />
                                                <p>{price}</p>
                                            </div>
                                            <p className='dollar'>
                                               {dollar}
                                            </p>
                                            </div>
                                    </div>
                                    <button className='processing'>
                                       <Link to={link} target='_blank'> Make Payment</Link>
                                        </button>
                                </div>
                            </div>
                        </div>
            
                    </div>
          </div>
      
    </div>
  )
}

export default Modal
