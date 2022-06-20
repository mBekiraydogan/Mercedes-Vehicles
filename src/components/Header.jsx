import React from 'react'
import {useState} from 'react'
import { moneyFormat } from '../helpers'

export default function Header({total, money}) {
  return (
    <div>
      
        <div>
        {total > 0 &&  money-total !== 0 &&(
            <div className='header'>Harcayacak ${moneyFormat( money - total)}  paranız kaldı</div>
          )}
          {
            total === 0 && (
              <div className='header'>Harcamak için ${moneyFormat( money)}  paranız var</div>
            )}
            {money - total === 0 && (
              <div className='header'> Paranız bitti. </div>
            )}
             <style jsx>{`
             .header{
              position: sticky;
              top: 0;
              background: linear-gradient(to bottom, green, greenyellow);
              height: 60px;
              display:flex;
              align-items: center;
              justify-content: center;
              color:white;
              font-size:24px;
              letter-spacing:1px;
             }
             `}</style>
          </div>
    </div>
  )
}
