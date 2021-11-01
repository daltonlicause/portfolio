import React, { useState } from "react";
import Emoji from "../emoji";
import { encode } from "../../helpers/encode";
import { ContactContainer } from "./styled";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const submitForm = (e) => {
    setLoading(true)
    setStatus(null)

    const body = encode({
      "form-name": "contact",
      "name": name,
      "email": email,
      "message": message
    })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body
    }).then(() => {
      resetForm()
      setLoading(false)
      setStatus("success")
      setResponse("Message sent successfully! I'll get in touch with you soon.")
    }).catch(() => {
      setLoading(false)
      setStatus("error")
      setResponse("There was an error trying to send your message. Please try again later.")
    });

    e.preventDefault();
  }

  const form = (
    <form name="contact" method="POST" data-netlify="true" onSubmit={(e) => submitForm(e)}>
      <div className="input-group half half-left">
        <label>Name:</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} required={true} value={name}/>
      </div>
      <div className="input-group half half-right">
        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required={true} value={email}/>
      </div>
      <div className="input-group">
        <label>Message:</label>
        <textarea name="message" onChange={(e) => setMessage(e.target.value)} required={true} value={message} rows="5"></textarea>
      </div>
      <div>
        <button type="submit" className={`${loading ? "loading" : ""}`}>Send</button>
      </div>
      { status && <div>{response}</div> }
    </form>
  )

  return (
    <ContactContainer className="contact">
      <h2><Emoji name="envelope"/> Contact Me</h2>
      <div className="sub-section">
        {form}
      </div>
    </ContactContainer>
  )
}

export default Contact;
