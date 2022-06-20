import React from 'react'
import { useState } from 'react'
import { moneyFormat } from '../helpers'


export default function Product({product,money, total, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id)

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id) 
                currentBasket.amount -=1
                if(currentBasket.amount === 0 ){
                    setBasket([...basketWithoutCurrent])
                }else {
                setBasket([...basketWithoutCurrent, currentBasket])
            }
    }

    const addBasket = () => {
        const CheckBasket = basket.find(item => item.id === product.id)
        if(CheckBasket){
                CheckBasket.amount +=1
                setBasket([...basket.filter(item => item.id !== product.id), CheckBasket])
        }else {
            setBasket([...basket, {
                id: product.id,
                amount:1
            }])
        }
    }

  return (
    <div>
        <div className="product">
            <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <div className="price">$ {moneyFormat( product.price)}</div>
        <div className="actions">
            <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className="amount">{basketItem && basketItem.amount || 0 } </span>
            <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        <style jsx>{`
        .product{
            padding: 15px;
            background: #fff;
            border:1px solid #ddd;
            margin-bottom:20px;
            width:50%;
        }
        .product img{
            width:100%;
            
        }
        .product h6{
            font-size:20px;
            margin-bottom:10px;
        }
        .product .actions{
            display: flex;
            align-items:center;
            margin-top: 15px;
        }
        .product .price{
            font-size:20px;
        }
        .actions button{
            height: 40px;
            padding:0 15px;
            flex:1;
            cursor: pointer;
        }
        .actions .buy-btn{
            color:green;
            background-color: #D3D3D3;
            font-size:16px;
            font-weight: 500;
            border-radius: 5px;
        }
        .actions .sell-btn{
            color:red;
            background-color: #D3D3D3;
            font-size:16px;
            font-weight: 500;
            border-radius: 5px;
        }
        .actions .amount{
            font-size:20px;
            width:50px;
            text-align: center;
        }
        `}</style>
        </div>
    </div>
  )
}
