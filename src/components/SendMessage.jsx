import React from 'react'
import { useState } from 'react'
import "./SendMessage.css"
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {
  const [value, setValue] = useState("");
  const {currentUser} = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(value.trim() === "") {
      alert("Enter valid message!!");
      return;

    }
    try {
      const {uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(err) {
      console.log(err);
    }
    console.log(value);
    setValue("");
  }
  

  return (
    <div className="bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg">
        <form onSubmit={handleSendMessage} className='containerWrap flex px-2'>
          <input value = {value} onChange={(e) => setValue(e.target.value)}  className='input w-full focus:outline-none  bg-gray-100 rounded-r-none text-custom-dark' type="text" placeholder='Enter your message here...'/>
          <button type='submit' className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-small'>Send</button>
        </form>
    </div>
  )
}

export default SendMessage
