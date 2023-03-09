import React from 'react'
import Content from '../content/content'
import './header.css'


function Header() {
  return (
    <div>
      <div className="head-bg">
        <div className="head-content-img">
            <Content/>
           <div className="head-img">
             <img className='headimg' src="assets/ge.png" alt="" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header
