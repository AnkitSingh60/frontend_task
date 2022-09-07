import React, { useContext } from 'react'
import { contextFal } from '../CreateContext/FalconContext'
const TimeTaken = () => {
  const { totalTime } = useContext(contextFal);
  return (
    <>
      <div className='TimeDiv'>
      TimeTaken : {totalTime}
      </div>

    </>
  )
}

export default TimeTaken