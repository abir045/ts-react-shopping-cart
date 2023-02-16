import React from 'react'
import {formatCurrency} from '../utilities/formatCurrency'

type StoreItemProps = {

id:number,
name:string,
price: number,
imgUrl: string

}

export function  StoreItem  ({ id, name , price, imgUrl} : StoreItemProps) 
  {
   const quantity = 0 
  return (
    <div>
      <div className=''>
        <img className='w-[350px] h-[300px] object-cover' src={imgUrl} alt={name}/>
        <div className='flex justify-between'>
        <h1>{name}</h1>
        <span>{formatCurrency(price) }</span>
        </div>
        <div className='mt-[5%]'>
          {quantity === 0 ? (
            <button className='w-full bg-blue-500 rounded text-white'>
              + Add to cart
            </button> 
          ) : <div className='flex flex-col items-center'>
            
              <div className='flex justify-center gap-3 mb-3'>
                <button>-</button>
                <span>{quantity}</span> in cart
                <button>+</button>
              </div>
              <button className='bg-red-500 rounded text-white p-2'>Remove</button>
            </div>}

        </div>
        
      </div>
   
  </div>
  ) 
  
}
