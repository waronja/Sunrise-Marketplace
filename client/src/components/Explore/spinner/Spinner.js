import React from 'react'
import productSpinner from './productSpinner.gif'

export const Spinner = () => {
  return (
    <div className='container'>
        <img src={productSpinner} width={"100px"} alt="spinner"/>
    </div>

  )
}
