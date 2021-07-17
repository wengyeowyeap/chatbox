import React from 'react';
import '../App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

function OnlineUserDisplay({onlineUser, newUser}) {

  return (
   
    <div style={{height:"100vh", width:"25vw", backgroundColor:"#F5F5F5", paddingTop:"10px"}}>
      <h2 style={{textAlign:"center"}}>{onlineUser.length}{" friends are online!"}</h2>
      <ListGroup>
        {
        onlineUser.map((item)=>{
          return(
            <>
                {
                item.username === newUser.username ?
                <ListGroupItem style={{backgroundColor:"gold"}}><img src={`https://api.adorable.io/avatars/50/${item.username}.png`} alt="" style={{height:"1rem"}}/>{item.username}</ListGroupItem>
                :
                <ListGroupItem><img src={`https://api.adorable.io/avatars/50/${item.username}.png`} alt="" style={{height:"1rem"}}/>{item.username}</ListGroupItem>
                }
            </>
              )
        })
        }
      </ListGroup>
    </div>

  );
}

export default OnlineUserDisplay;