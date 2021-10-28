import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Message countdown
  const message = watch('message') || '';
  const messageCharsLeft = 2500 - message.length;

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Contact Me!</h1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {errors.name && errors.name.type === 'required' && (
          <span role="alert">Name Required</span>
        )}
        <input
          className="w-30 border-green-600 border-2"
          type="text"
          name="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: true, maxLength: 40 })}
          placeholder="Name"
        />

        {errors.email && errors.email.type === 'required' && (
          <span role="alert">Email Required</span>
        )}
        <input
          className="w-30 border-red-600 border-2"
          type="email"
          name="email"
          {...register('email', { required: true, maxLength: 40 })}
          placeholder="Email"
        />

        {errors.message && errors.message.type === 'required' && (
          <span role="alert">Message Required</span>
        )}
        <textarea
          className="w-80 h-40 border-blue-600 border-2"
          {...register('message', { required: true, maxLength: 2500 })}
          name="message"
          id=""
          cols="30"
          rows="10"
        />

        <p className>{messageCharsLeft}</p>

        <input
          className="w-20 h-30 border-blue-600 border-2"
          type="submit"
          value="Send"
        />
        <input
          className="w-20 h-30 border-blue-600 border-2"
          type="reset"
          value="Clear"
        />
      </form>
    </div>
  );
}

export default Contact;
