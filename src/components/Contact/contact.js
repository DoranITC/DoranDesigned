import React from "react"
import "./contact.css"
import styled from 'styled-components'

const Form = () => {
  return(
    <div>
      <div>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true"  class="form-style-9">
      <input type="hidden" name="bot-field"/>
      <ul>
      <li>
          <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
          <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />

      </li>
      <li>
          <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
          <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
      </li>
      <li>
      <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
      </li>
      <li>
      <textarea name="field5" class="field-style" placeholder="Message"></textarea>
      </li>
      <li>
      <input type="submit" value="Send Message" />
      </li>
      </ul>
      </form>
    </div>
    </div>
  )
}

const TopBit = styled.div`
  padding-top: 2em;
  padding-left: 2em;

`

const Contact = () => {
  return (<div>
      <TopBit>
        <div className="top_bit_container">
          <p className="title">Contact Us</p>
          <p className="msg">Send us a message or improvement suggestion:</p>
          <p className="msg">Leave your contact information and we'll try our best to get back to you</p>
        </div>
      </TopBit>
      <Form></Form>
    </div>)
}

export default Contact