import React, { useRef } from 'react'
import './modal.css'

function Modal({price, title, creator, dollar} ) {
  
  
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
                                <img className='compl-img' src="assets/14.jpg" alt="" />
                                <div className="creator-price">
                                    <div className="creator-img-name">
                                        <img className='creator-img' src="assets/14.jpg" alt="" />
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
                                    <button className='processing'>Make Payment</button>
                                </div>
                            </div>
                        </div>
            
                    </div>
          </div>
      
    </div>
  )
}

export default Modal
