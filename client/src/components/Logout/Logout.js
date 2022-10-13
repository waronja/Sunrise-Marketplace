import React from 'react'

const Logout = () => {

    const handleLogout = () =>{
        fetch('http://localhost:3000/users', {
            method: "DELETE"
        })
        .then((response)=>{
            if(response.ok){
                setCurrentUser(null)
            }
        })
    }
  return (
    <div>
        <button type='submit' className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout