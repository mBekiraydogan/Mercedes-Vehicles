import React from 'react'
import { useState } from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helpers'

 function Basket({basket,total,resetBasket, products}) {
  return (
    <div>
       <div className='basket-container container'>
        <h3>Alışveriş Detayları</h3>
       {basket.map( item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id )}/>
        ))}
        
        <div className='total'>
            Toplam : ${moneyFormat( total)}
        </div>   
      <button className='resset' onClick={resetBasket}>Sepeti Sıfırla</button>
      </div>
      <style jsx>
        {`
          .basket-container{
            padding:20px;
            background: #fff;
            border: 1px solid #ddd;
          }
          .basket-container .total{
            border-top: 1px solid #ddd;
            padding-top:10px;
            margin-top:10px;
            font-size: 18px;
            text-align:right;
            color:	#1A237E;
            font-weight:bold;
          }
          .basket-container .resset{
            font-size: 14px;
            font-weight:500;
            height:40px;
            background: #696969;
            color:white;
            padding:0 20px;
            cursor:pointer;
            border-radius:5px;
          }
        `}
      </style>
    </div>
  )
}
export default Basket;