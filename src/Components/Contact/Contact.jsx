import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import conf from '../../conf/conf';

const Contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const serviceId = conf.emailjsServiceId;
  const templateId = conf.emailjsTemplateId;
  const apiPublicKey = conf.emailjsApiPublicKey;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${serviceId}`, //Service ID
        `${templateId}`, //Template ID
        form.current,
        `${apiPublicKey}`, // API Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark,'
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id='contact'
      className='flex flex-col items-center justify-center py-24 pb-24 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw]'>

      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-white text-3xl sm:text-4xl font-bold'>
          CONTACT
        </h2>
        <div className="w-44 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className='text-gray-300 mt-4 text-lg font-bold'>
          Let’s build something great together — I’m open to full-time and freelance opportunities
        </p>
        <p className='text-gray-300 mt-4 text-md font-semibold'>
          Feel free to reach out for collaborations or just to connect.
        </p>
      </div>

      {/* Contact Form */}
      <div className='mt-4 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border  border-gray-700'>
        <h3 className='text-xl font-semi-bold text-white text-center'>
          Connect With Me
        </h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex-flex-col space-y-4'>
          <input type='email' name='user_email' placeholder='Enter Email' required className='w-full p-3 rounded-md bg-[#131025] hover:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500' >
          </input>
          <input type='text' name='user_name' placeholder='Enter Name' required className='w-full p-3 rounded-md bg-[#131025] hover:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500' >
          </input>
          <input type='text' name='subject' placeholder='Subject' required className='w-full p-3 rounded-md bg-[#131025] hover:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500' >
          </input>
          <textarea name='message' placeholder='Message' rows='4' className='w-full p-3 rounded-md bg-[#131025] hover:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500'></textarea>

          {/* Send Button */}
          <button type='submit'
            className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer'
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;