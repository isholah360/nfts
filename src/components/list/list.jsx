import React from 'react'
import './list.css'
import Card from '../card/card'
import Modal from '../card/modal'

function List() {
  return (
    <div>
      <div className="collections">
        Collections
      </div>
      <div className="card-grid">
      <Card dollar="$190" title="Audotocum" 
      creator="Maxim Cox" price="0.9952"/>
      
      <Card dollar="$200" title="Medicronum" creator="Coinmax" price="2.1952"/>
      <Card dollar="$290" title="Articalion" creator="Cruxsol" price="0.9952"/>
      <Card dollar="$230" title="Gettion" creator="Karien Lox" price="0.8952"/>
      <Card dollar="$195" title="Halunui" creator="Graham Tuck" price="0.7952"/>
      <Card dollar="$236" title="Carsooeoe" creator="Halin know" price="0.6952"/>
      <Card dollar="$220" title="Hartenei" creator="Milner Term" price="0.945"/>
      <Card dollar="$250" title="Oganogram" creator="Maxim Cox" price="0.8782"/>
      </div>
    </div>
  )
}

export default List
