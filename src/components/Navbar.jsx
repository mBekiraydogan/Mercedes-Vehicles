import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='benz'>
            <img src="https://www.mercedes-benz.com/etc/designs/brandhub/frontend/static-assets/header/logo.svg" alt="" />  
            <h1 className='mercedes'>Mercedes-Benz</h1>
        </div>
        <style jsx>{`
        .benz{
            background-color:black;
            color:white;
            display: flex;
            align-items:center;  
            height: 85px; 
        }
        .mercedes{
            margin-left:7px;
            text-align:center;
        }
        
        `}</style>
    </div>
  )
}
