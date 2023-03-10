import React, {useRef} from 'react'
import './card.css'
import gsap from 'gsap'
import Modal from './modal'


function Card({price, title,  nfts,
  creator, dollar, theimg, link } ) {

  const buttons = useRef(null)
  const butonMove = useRef(null)
  const ref = useRef(null)
  const ref2 = useRef(null)


  const move = ()=>{
    gsap.fromTo([butonMove.current, ref.current], 
      { opacity:0, y:"-2rem", }, { opacity:1, y:"-5rem", 
    duration:1, delay:.4,
    stagger:{amount:.7}})
    buttons.current.style.display='block'
  }
  const unmove = ()=>{
    buttons.current.style.display='none'
  }
  const ChangeColor =()=>{
    ref.current.style.color = "red"
  }
  const buy = ()=>{
    ref2.current.style.display='block'
  }
  const close = ()=>{
    ref2.current.style.display='none'
  }

  return (
    <>
    <div className='theouter' onMouseEnter={move} onMouseLeave={unmove}>
       <div className="theimg-content">

        <div className="theimg">
          <img className='real-img' src={nfts} alt="" />
        </div>
        <div className="thecontents">
          <div className="title-author">
            <p className='title-nft'>{title}</p>
            <p className='theauthor'>{creator}</p>
          </div>
          <div className="theprice-detail">
            <div className='price'>Price</div>
            <div className='pricez'>
              <div className='the-eth'>
                <img src="assets/eth.png" alt="" />
                <p>{price}</p>
              </div>
              <p className='dollar'>
                {dollar}
              </p>
            </div>
          </div>
          
        </div>
       </div>  
       <div className="buynow-wish" ref={buttons}>
         <button ref={butonMove} onClick={buy}>Buy Now</button>
         <button ref={ref} onClick={ChangeColor} className='second'>
         &hearts;
         </button>
      </div>
      
      <div className="buymodal">
        <div className="modal-bg" ref={ref2} onMouseLeave={close}>

         <div className="close" onClick={close}>X</div>
            <Modal dollar={dollar} title={title} main={nfts}
            creator={creator} price={price} imgs={theimg} link={link}/>
        </div>
    </div>
 
    
    </div>
   
     
    </>
  )
}

export default Card
