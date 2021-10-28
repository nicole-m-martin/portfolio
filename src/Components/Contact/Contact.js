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
      <section className="flex justify-center">
        <div class="w-full max-w-xs">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {errors.name && errors.name.type === 'required' && (
              <span role="alert">Name Required</span>
            )}
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', { required: true, maxLength: 40 })}
            />

            {errors.email && errors.email.type === 'required' && (
              <span role="alert">Email Required</span>
            )}
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: true, maxLength: 40 })}
            />

            {errors.message && errors.message.type === 'required' && (
              <span role="alert">Message Required</span>
            )}
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              {...register('message', { required: true, maxLength: 2500 })}
              name="message"
              id=""
              cols="30"
              rows="10"
              aria-invalid={errors.message ? 'true' : 'false'}
            />

            {/* Message countdown */}
            <p className>{messageCharsLeft}</p>

            <input
              className="h-8 px-4 text-sm text-black-100 transition-colors duration-150 bg-yellow-400 rounded-lg cursor-pointer focus:shadow-outline hover:bg-yellow-800"
              type="submit"
              value="Send"
            />
            <input
              className="h-8 px-4 p-5text-sm text-black-100 transition-colors duration-150 bg-yellow-500 rounded-lg cursor-pointer focus:shadow-outline hover:bg-yellow-800"
              type="reset"
              value="Clear"
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
