import React from 'react'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div className='mx-[5%]'>
      <h1 className='mb-5'>Store</h1> 
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
          {
            storeItems.map((item)=> (
             <div>
                <StoreItem {...item}/>
              </div>
            ))
          }
       </div>

    </div>
  )
}

export default Store