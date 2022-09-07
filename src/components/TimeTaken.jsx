import React, { useContext } from 'react'
import { contextFal } from '../CreateContext/FalconContext'
const TimeTaken = () => {
  const { totalTime } = useContext(contextFal);
  return (
    <>
      <div className='Time'>
        <button className='total'>TimeTaken : {totalTime}</button>
      </div>

    </>
  )
}

export default TimeTaken