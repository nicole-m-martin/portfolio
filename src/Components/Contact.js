import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_FkoSWYEQ8F2cqar2OKJ2V');

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    // reset,
    formState: { errors },
  } = useForm();

  // Create a unique 6-digit string of 6 numbers to use as a Contact Number
  const [contactNumber, setContactNumber] = useState('000000');

  const generateContactNumber = () => {
    const numString = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numString.substring(numString.length - 6));
  };

  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();

    sendForm(
      'default_service',
      'template_28v9nkp',
      '#contact-form',
      'user_FkoSWYEQ8F2cqar2OKJ2V'
    ).then(
      function (res) {
        console.log('SUCCESS!', res.status, res.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  // Message countdown
  const message = watch('message') || '';
  const messageCharsLeft = 2500 - message.length;

  return (
    <>
      <h1 className="font-Pt text-4xl font-semibold pt-8">Let's Chat! </h1>
      <div className="p-6 m-5">
        <a href="https://twitter.com/nmartinpdx" className="">
          <i className="fab fa-twitter-square fa-3x m-4 hover:bg-yellow-300"></i>
        </a>
        <a href="https://github.com/nicole-m-martin" className="">
          <i className="fab fa-github-square fa-3x m-4 hover:bg-green-300"></i>
        </a>
        <a href="https://www.linkedin.com/in/nicolemartinpdx/" className="">
          <i className="fab fa-linkedin fa-3x m-4 hover:bg-blue-400"></i>
        </a>
      </div>
      <div className=" flex justify-center items-center">
        <section className="flex justify-center">
          <div className="w-full max-w-xs">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                name="contact_number"
                value={contactNumber}
              />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt mb-2"
                htmlFor="name"
              >
                Name:
              </label>
              {errors.name && errors.name.type === 'required' && (
                <span className="alert" role="alert">
                  Name Required
                </span>
              )}
              <input
                className="border-2 border-black ring ring-yellow-300 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', { required: true, maxLength: 40 })}
              />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt mb-2 pt-4"
                htmlFor="email"
              >
                Email:
              </label>
              {errors.email && errors.email.type === 'required' && (
                <span className="alert" role="alert">
                  Email Required
                </span>
              )}
              <input
                className="border-2 border-black ring ring-green-300 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline "
                type="email"
                name="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', { required: true, maxLength: 40 })}
              />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt mb-2 pt-4"
                htmlFor="message"
              >
                Message:
              </label>
              {errors.message && errors.message.type === 'required' && (
                <span className="alert" role="alert">
                  Message Required
                </span>
              )}
              <textarea
                className="border-2 border-black ring rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none "
                {...register('message', { required: true, maxLength: 2500 })}
                name="message"
                id=""
                cols="30"
                rows="10"
                aria-invalid={errors.message ? 'true' : 'false'}
              />

              {/* Message countdown */}
              <p className="font-semibold font-Pt">{messageCharsLeft}</p>

              <input
                className="h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 bg-white-400 rounded-lg cursor-pointer focus:shadow-outline ring ring-green-500 hover:bg-green-400"
                type="submit"
                value="Send"
              />
              <input
                className="h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 bg-white-400 rounded-lg cursor-pointer focus:shadow-outline ring ring-pink-500 hover:bg-pink-400"
                type="reset"
                value="Clear"
              />
            </form>
            <div className="mb-12"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
