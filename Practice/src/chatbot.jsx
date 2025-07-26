import React from 'react'
import { useState } from 'react'

const chatbot = () => {
    const[input,setInput]=useState('')
    const[response,setResponse]=useState('[]')

    const handleSend=()=>{
        if (!input.trim()) {
            return
        }

        const updatedChat=[...response,{sender:'user',message:input}]
    }

      let botReplay=''
      const usermessage=input.value
      if (usermessage=='hi') {
        botReplay='hello'
      }else if(usermessage=='how are you?'){
        botReplay='jdjifuifjpdf'
      }else{
        botReplay='i cant help'
      }

      updatedChat.push({sender:'bot',message:'botReplay'})
      setResponse(updatedChat)
      setInput('')

   

  return (
    <div>
        {}
    </div>
  )
}

export default chatbot