import React, { useState, useEffect } from 'react';
import './App.css';
import ChatDisplay from './components/ChatDisplay';
import MessageForm from './components/MessageForm';
import OnlineUserDisplay from './components/OnlineUserDisplay';
import Conversations from './components/Conversations';
import Socket from './utils/socket'

function App() {
  const [convo, setConvo] = useState(Conversations)

  const addMessage = (text, timestamp, username) =>{
    Socket.emit('BROADCAST_MESSAGE', {username: username, message: text, timestamp:timestamp})
  }
  
  const [newUser, setNewUser] = useState({})
  const [onlineUser, setOnlineUser] = useState([])

  useEffect(() => {
   Socket.emit('NEW_USER')
 
   Socket.on('GET_CURRENT_USER', user => {
    setNewUser(user)
   })
 
   Socket.on('UPDATE_USER_LIST', users => {
    setOnlineUser(users)
   })

   Socket.on('RECEIVE_BROADCAST', data =>{
    setConvo((prevState)=>{
      return [...prevState,data]
    })
  })
  }, [])
  return (
    <div style={{display:"flex", backgroundColor:"#F5F5F5"}}>   
      <div className="d-flex flex-column" style={{width:"100%"}}>
        <div style={{width:"100%", textAlign:"center"}}><h1>Next Chat</h1></div>
        <ChatDisplay convo={convo} newUser={newUser}/>
        <MessageForm newUser={newUser} addMessage={addMessage}/>
      </div>
      <OnlineUserDisplay newUser={newUser} onlineUser={onlineUser}/>
    </div>
  );
}

export default App;
