import React from 'react'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div>
      <h1>Store</h1> 
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
          {
            storeItems.map((item)=> (
              <div>
                {JSON.stringify(item)}
              </div>
            ))
          }
       </div>

    </div>
  )
}

export default Store