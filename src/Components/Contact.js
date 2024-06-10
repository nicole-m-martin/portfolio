import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import x from '../assets/square-x-twitter.svg'
// import { init, sendForm } from 'emailjs-com';
// init('user_FkoSWYEQ8F2cqar2OKJ2V');

function Contact() {
  const {
    // register,
    // handleSubmit,
    // watch,
    // reset,
    formState: { errors },
  } = useForm();

  // Message Sent alert
  // const [successfulEmail, setSuccessfulEmail] = useState(false);

  // const onSubmit = () => {
  //   sendForm(
  //     'default_service',
  //     'template_28v9nkp',
  //     '#contact-form',
  //     'user_FkoSWYEQ8F2cqar2OKJ2V'
  //   ).then(
  //     function (res) {
  //       console.log('SUCCESS!', res.status, res.text);
  //     },
  //     function (error) {
  //       console.log('FAILED...', error);
  //     }
  //   );
  //   setSuccessfulEmail(true);
  // };

  // Message countdown
  // const message = watch('message') || '';
  // const messageCharsLeft = 2500 - message.length;

  return (
    <div className={styles.main_div}>
      <div className={styles.flex_div}>
        <div className="p-5">
        <h1 className={styles.chat}>Let's Chat! 💬 </h1>
          <p className={styles.social}>Social Links:</p>
          <div className={styles.iconBox}> <a href="https://twitter.com/nmartinpdx">
          <img src={x} alt='twitter-x' className='fa-3x m-4 hover:bg-yellow-300' />
          </a>
          <a href="https://github.com/nicole-m-martin">
            <i className="fab fa-github-square fa-3x m-4 hover:bg-green-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolemartinpdx/">
            <i className="fab fa-linkedin fa-3x m-4 hover:bg-blue-400"></i>
          </a>
          </div>
        </div>
      </div>
    
      <div className={styles.main_form_container}>
        {/* <section className="flex justify-center">
          <div className="w-full max-w-xs">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="contact_number" />

              <label className={styles.labels} htmlFor="name">
                Name:
              </label>
              {errors.name && errors.name.type === 'required' && (
                <span className="alert" role="alert">
                  Name Required
                </span>
              )}
              <input
                className={styles.name_input}
                type="text"
                name="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', { required: true, maxLength: 40 })}
              />

              <label className={styles.labels} htmlFor="email">
                Email:
              </label>
              {errors.email && errors.email.type === 'required' && (
                <span className="alert" role="alert">
                  Email Required
                </span>
              )}
              <input
                className={styles.email_input}
                type="email"
                name="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', { required: true, maxLength: 40 })}
              />

              <label className={styles.labels} htmlFor="message">
                Message:
              </label>
              {errors.message && errors.message.type === 'required' && (
                <span className="alert" role="alert">
                  Message Required
                </span>
              )}
              <textarea
                className={styles.message_input}
                {...register('message', { required: true, maxLength: 2500 })}
                name="message"
                id=""
                cols="30"
                rows="10"
                aria-invalid={errors.message ? 'true' : 'false'}
              />

            
              <p className={styles.countdown}>{messageCharsLeft}</p>
              <div className="flex flex-row justify-center">
                <input className={styles.send_btn} type="submit" value="Send" />

                <input
                  className={styles.clear_btn}
                  onClick={() =>
                    reset({
                      name: '',
                      email: '',
                      message: '',
                    })
                  }
                  type="button"
                  value="Clear"
                />
              </div>
              
            </form>
            {successfulEmail && (
              <span className="italic text-green-500">Email Sent</span>
            )}
          </div>
        </section> */}
        <a className={styles.labels} href="mailto:n.martinpdx@gmail.com">Email: n.martinpdx@gmail.com</a>
      </div>
    </div>
  );
}

const styles = {
  main_div: 'bg-white dark:bg-gray-600 h-screen grid place-content-center',
  flex_div: 'flex flex-row justify-center',
  social: 'font-Pt dark:text-white text-2xl font-semibold mt-.5 text-center',
  iconBox: 'flex flex-row justify-center m-4',
  chat: 'font-Poppins dark:text-white text-5xl font-semibold mt-.5 tracking-wide text-center m-10',
  main_form_container: 'flex justify-center items-center p-5',
  labels:
    'block text-grey-darker text-lg text-left  hover:bg-pink-300 dark:hover:bg-pink-400  font-bold font-Pt dark:text-white margin-2 p-2',
  name_input:
    'border-2 border-black ring ring-yellow-300 dark:ring-pink-400 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline dark:bg-white',
  email_input:
    'border-2 border-black ring ring-green-300 dark:ring-blue-400 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline dark:bg-white',
  message_input:
    'border-2 border-black ring ring-blue-400 dark:ring-green-300 rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none dark:bg-white',
  countdown: 'font-semibold font-Pt dark:text-white',
  send_btn:
    'h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 dark:bg-green-200 rounded-lg cursor-pointer focus:shadow-outline ring ring-green-500 hover:bg-green-400 dark:hover:bg-green-300',
  clear_btn:
    'h-8 px-4 m-4 text-sm text-black font-Pt transition-colors duration-150 dark:bg-pink-200 rounded-lg cursor-pointer focus:shadow-outline ring ring-pink-500 hover:bg-pink-400 dark:hover:bg-pink-300',
};

export default Contact;
