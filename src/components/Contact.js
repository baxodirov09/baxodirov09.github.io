import React from "react";
import './styles/contact.css'
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__form">
        <form action="">
          <div className="top">
            <input type="text" id="text" placeholder="Name" required />
            <input type="email" placeholder="E-Mail" required/>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Send a message' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
