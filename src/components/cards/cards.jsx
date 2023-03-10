import React, { useRef } from 'react'
import { data } from '../card/data';
import './cards.css'

function Cards() {
    const ref =useRef(null)

    const show =()=>{
        // ref.current.style.display='block'
    }
    const off =()=>{
        ref.current.style.display='none'
    }
  return (



    <>
    <div>

        <div className="outer">
            <div className="inner">
                {data.map((el)=>(
                    <div className="eachcard" onMouseEnter={show}>
                        <img className='thecards' src={el.pix} alt={el.id} />
                        <div className="imgcover">
                           <div className="thebuttonz">
                                <button>Buy Now</button>
                                <button>like</button>
                           </div>
                        </div>
                        <div className="modal" ref={ref} onMouseLeave={off}>
                            <div className="mod-img">
                                <img className='the-cards' src={el.pix} alt="" />
                            </div>
                            <div className="mod-price"></div>
                        </div>
                        <div className="cards-content">
                            <div className="nft-name">{el.des}</div>
                            <div className="create-name">{el.name}</div>
                            <div className="creator-prize">
                                <p className='eng-price'>Price</p>
                                <p className='ethe-price'>
                                    <div className="eth-logo-price">
                                        <img className='ethe-logo' src="assets/eth.png" alt="" />
                                        <p>{el.eth}</p>
                                    </div>
                                    <p className='dollar-price'>{el.price}</p>
                                </p>
                            </div>

                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Cards
