import "./formStyles.css";

import React, {useState} from 'react';

const Form = () => {
  const[data, setData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });

  const {name,email,subject,message}=data;

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://v1.nocodeapi.com/saty10/google_sheets/ooqhbBxDMNrspBnf?tabId=Sheet1",{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([[name,email,subject,message, new Date().toLocaleString()]])
      }
    );
      await response.json();
      setData({...data,name:"",email:"",subject:"",message:""}); 
    } catch (err) {
      console.log(err)
    }
  };
    return (
    <div className = "form">
        <form 
        action="https://formsubmit.co/satys321@gmail.com" method="POST"
        onSubmit={handleSubmit}>
            <label>Your name</label>
            <input type="text"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleChange}/>

            <label>E-mail</label>
            <input type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleChange}/>

            <label>Subject</label>
            <input type="text"
            name="subject"
            autoComplete="off"
            value={subject}
            onChange={handleChange}/>

            <label>Message</label>
            <textarea rows = "6" placeholder = "Type your message here"
            name="message"
            autoComplete="off"
            value={message}
            onChange={handleChange}/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form