import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser, logOut} = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
        <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl font-bold">AnikChat</a>
        {currentUser?<button className='font-bold' onClick={handleLogout}>LogOut</button>:""}
        </div>
    </div>
  )
}

export default Navbar
