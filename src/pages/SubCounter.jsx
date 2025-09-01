import React, { useState } from 'react'

const SubCounter = () => {
    const [counter, setCounter] = useState(0);
    
  return (
    <div className='flex flex-col border gap-8 max-w-lg p-5'>
        <span><strong>Number:</strong> {counter}</span>
            <div className='flex flex-row gap-6'>
            <button className='text-white bg-black' onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button className='text-white bg-black' onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
    </div>
  )
}

export default SubCounter;