import React from 'react'

const ServerSideErrors = (props) => {
  return (
    <div>
        <p className='lead fw-bold'>An Error Occured</p>
        {props.errors.map((error, index)=>(
            <p className='text-danger' key={index}>{error}</p>
        ))}
    </div>
  )
}

export default ServerSideErrors