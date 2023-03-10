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
      <Card dollar="$190" nfts="assets/14.jpg"
      title="Audotocum" link="https://opensea.io/assets/ethereum/0xb59b35f2891226cb576c964e85fcf5415972401d/466"
      creator="Maxim Cox" 
      price="0.9952"  theimg="assets/24.png"/>
      
      <Card dollar="$200" nfts="assets/15.jpg"
      title="Medicronum" theimg="assets/28.jpg"
      creator="Coinmax"  price="2.1952"
      link="https://opensea.io/assets/ethereum/0xfefec50e21ed1e32223bb9d08e01b381bf1d8abc/736"
     />
      <Card dollar="$290"  nfts="assets/16.jpg"
      title="Articalion"  theimg="assets/26.png"
      creator="Cruxsol"  link="https://opensea.io/assets/ethereum/0xd2a713c0f0953ccbffd93c86534624de5940e62e/2297"
       price="0.9952"/>
      <Card dollar="$230" nfts="assets/17.jpg"
      title="Gettion" theimg="assets/24.png"
      creator="Karien Lox" link="https://opensea.io/assets/ethereum/0x47f3a38990ca12e39255e959f7d97fbe5906afd4/8301"
      price="0.8952" />
      <Card dollar="$195"  nfts="assets/12.jpg"
      title="Halunui" theimg="assets/25.png"
      creator="Graham Tuck" link="https://opensea.io/assets/ethereum/0x76be3b62873462d2142405439777e971754e8e77/10844"
      price="0.7952" />
      <Card dollar="$236" nfts="assets/11.jpg"
      title="Carsooeoe" theimg="assets/28.jpg"
      creator="Halin know" link="https://opensea.io/assets/ethereum/0x31fe9d95dde43cf9893b76160f63521a9e3d26b0/130"
      price="0.6952" />
      <Card dollar="$220" nfts="assets/9.jpg"
      title="Hartenei" theimg="assets/27.jpg"
      creator="Milner Term"link="https://opensea.io/assets/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/7385"
      price="0.945"/>
      <Card dollar="$250" nfts="assets/1.jpeg"
      title="Oganogram" theimg="assets/24.png"
      creator="Maxim Cox" link="https://opensea.io/assets/ethereum/0x9fff0b1a6e9e9554baf3f8a39b6353fda9c30054/3"
      price="0.8782" />
      </div>
    </div>
  )
}

export default List
