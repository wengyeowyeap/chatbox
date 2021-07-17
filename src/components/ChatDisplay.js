import React from 'react';
import '../App.css';
import moment from 'moment'


function ChatDisplay({convo, newUser}) {

  return (

    <div className="" style={{width:"100%", height:"calc(100vh - 106px)",backgroundColor:"white", wordWrap: "break-word", overflowY:"scroll",}}>

      {
        convo.map((msg)=>{
          return(
            <>
            {
              newUser.username === msg.username
              ?
              <div className="d-flex flex-row-reverse">
                <div className="d-flex flex-column align-items-center p-2">
                  <img style={{borderRadius:"50%", height:"50px", width:"50px" }} src={`https://api.adorable.io/avatars/50/${msg.username}.png`} alt=""/>
                  <span style={{fontSize:"0.8rem"}}>{msg.username}</span>
                </div>
                <div className="p-2">
                  <div><span style={{fontSize:"1.4rem"}}>{msg.message}</span></div>
                  <div><small>{moment(msg.timeStamp).calendar()}</small></div>
                </div>
              </div>
              
              : 
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center p-2">
                  <img style={{borderRadius:"50%", height:"50px", width:"50px" }} src={`https://api.adorable.io/avatars/50/${msg.username}.png`} alt=""/>
                  <span style={{fontSize:"0.8rem"}}>{msg.username}</span>
                </div>
                <div className="p-2">
                  <div><span style={{fontSize:"1.4rem"}}>{msg.message}</span></div>
                  <div><small>{moment(msg.timeStamp).calendar()}</small></div>
                </div>
              </div>
            } 
            </>
          
          )

        })
      }
    </div>


  );
}

export default ChatDisplay