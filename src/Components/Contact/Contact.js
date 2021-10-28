import React from 'react';

function Contact() {
  return (
    <div>
      CONTACT
      <form id="contact-form">
        <input
          className="w-30 border-green-600 border-2"
          type="text"
          name="user_name"
          placeholder="Name"
        />

        <input
          className="w-30 border-red-600 border-2"
          type="email"
          name="user_email"
          placeholder="Email"
        />

        <textarea
          className="w-80 h-40 border-blue-600 border-2"
          name="message"
          id=""
          cols="30"
          rows="10"
        >
          Message...
        </textarea>

        <input
          className="w-20 h-30 border-blue-600 border-2"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default Contact;
