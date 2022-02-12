import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_FkoSWYEQ8F2cqar2OKJ2V');

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Message Sent alert
  const [successfulEmail, setSuccessfulEmail] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);

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
    setSuccessfulEmail(true);
  };

  // Message countdown
  const message = watch('message') || '';
  const messageCharsLeft = 2500 - message.length;

  return (
    <div className="bg-white dark:bg-gray-600 h-screen grid place-content-center ">
      <div className="flex flex-row justify-center">
        <div className="p-5">
          {/* social links */}
          <p className="font-Pt dark:text-white text-2xl font-semibold mt-.5 text-center">
            Social Links:
          </p>
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
      </div>
      <h1 className="font-Poppins dark:text-white text-4xl font-semibold mt-.5 tracking-wide text-center">
        Let's Chat!{' '}
      </h1>
      <div className="flex justify-center items-center p-5">
        <section className="flex justify-center">
          <div className="w-full max-w-xs">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="contact_number" />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt dark:text-white mb-2"
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
                className="border-2 border-black ring ring-yellow-300 dark:ring-pink-400 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline dark:bg-white"
                type="text"
                name="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', { required: true, maxLength: 40 })}
              />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt dark:text-white mb-2 pt-4"
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
                className="border-2 border-black ring ring-green-300 dark:ring-blue-400 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline dark:bg-white "
                type="email"
                name="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', { required: true, maxLength: 40 })}
              />

              <label
                className="block text-grey-darker text-lg text-left  font-bold font-Pt dark:text-white mb-2 pt-4"
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
                className="border-2 border-black ring ring-blue-400 dark:ring-green-300 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none dark:bg-white "
                {...register('message', { required: true, maxLength: 2500 })}
                name="message"
                id=""
                cols="30"
                rows="10"
                aria-invalid={errors.message ? 'true' : 'false'}
              />

              {/* Message countdown */}
              <p className="font-semibold font-Pt dark:text-white">
                {messageCharsLeft}
              </p>
              <div className="flex flex-row justify-center">
                <input
                  className="h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 dark:bg-green-200 rounded-lg cursor-pointer focus:shadow-outline ring ring-green-500 hover:bg-green-400 dark:hover:bg-green-300"
                  type="submit"
                  value="Send"
                />

                <input
                  className="h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 dark:bg-pink-200 rounded-lg cursor-pointer focus:shadow-outline ring ring-pink-500 hover:bg-pink-400 dark:hover:bg-pink-300"
                  type="button"
                  onClick={() =>
                    reset({
                      name: '',
                      email: '',
                      message: '',
                    })
                  }
                  value="Clear"
                />
              </div>
              {/* Form Submit Success Message */}
            </form>
            {successfulEmail && (
              <span className="italic text-green-500">Email Sent</span>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
