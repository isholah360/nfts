import React, {useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './caro.css'
import { data } from '../card/data';

function SampleNextArrow({ onClick }) {
    return (
    <div className="combine">
          <button className="right" onClick={onClick}>
             <span className='arow-one'>&#8810;</span>
        </button>
    </div>
    );
  }
 
  function SamplePrevArrow({ onClick } ) {
   
    return (
      <div className="combine">
         <button className="left" onClick={onClick}>
        <span className='arow-two'>&#8811;</span>
     </button>
    </div>
    );
  }
  let num = 1
   
  let change =()=>{
    num ++
  }

  setTimeout(() => {
    change();
  }, 500);


function Test() {

    const [next, setNext] = useState(
        change
    )
 
    
    const plus = () =>{
        setNext(data.lenght -1 ? 1 : next + 1)
    }
    // useEffect(()=>{
    //     setTimeout(() => {
    //        plus();
    //     }, 3500);
    //   })
    
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          autoplay: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
       };
    
    
  return (
    <div>
      <p className='trend-title'>Top Trending Auctions</p>
   <div className="themark">

   <Slider {...settings}>
        {data.map((el)=>(
            <div className="testy" key={el.id}>
                <div className="delvier">
                    
                     <div className="pane" alt={el.id}>
                     <img className='dimg' src={el.pix} alt={el.id} />
                      <div className="price-desc">
                        <p className='desc'>{el.des}</p>
                       <div className="prices-wishlist">
                            <p className='theprice'>Price</p>
                          <div className="prices">
                              <p>{el.eth}</p>
                              <p>{el.price}</p>
                          </div>
                       </div>
                      </div>
                     </div>
                     <div className={next === el.id ? "scrcover-active":"scrcover"}>
                            <div className="social-media">
                                <p className='media-xs first'><img className='media-pix' src={el.like} alt={el.id} /></p>
                                <p className='media-xs second'><img className='media-pix' src={el.cart} alt={el.id} /></p>
                  
                            </div>
                            <p className='team-name'> {el.name} </p>
                  
                     </div>
                </div>
              
            </div>
        ))}
    </Slider>
   </div>

    </div>
  )
}

export default Test
