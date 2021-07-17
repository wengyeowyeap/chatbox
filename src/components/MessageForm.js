import React, {useState} from 'react';
import '../App.css';
import {InputGroupAddon, Input, Button, Form, FormGroup} from 'reactstrap';

function MessageForm({addMessage, newUser}) {
  const [text, setText] = useState('')
  const username = newUser.username

  const handleSubmit = e => {
    e.preventDefault()
    if (text !== ""){
      addMessage(text, Date.now(), username)
    } else {
      alert("Please enter task.")
    }    
    setText("")
  }

  const handleInput = e => {
    setText(e.target.value)
  }
  return (

    <Form inline className="w-100" onSubmit={handleSubmit}>
      <FormGroup className="w-100 d-flex">
        <Input className="flex-grow-1 py-2" onChange={handleInput} value={text} placeholder="" maxLength="500"/>
        <InputGroupAddon className="py-2" addonType="append"><Button disabled={text===""} type="submit" color="secondary">Send Message</Button></InputGroupAddon>
      </FormGroup>
    </Form>

    //{/* </div> */}
  );
}

export default MessageForm;