import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactMe() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.user_name === '' || formData.user_email === '' || formData.subject === '' || formData.message === '') {
      toast.error("Please fill in all fields!");
      return;
    } else {
      emailjs
      .sendForm('service_d7zr5cn', 'template_vy37y59', form.current, {
        publicKey: 'BCvseqzBryJh7ElBH',
      })
      .then(
        () => {
          toast.success("Successfully");
        },
        (error) => {
          toast.error('FAILED...', error.text)
        },
      );
    }

    e.target.reset();
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    });
  };

  const isDisabled = Object.values(formData).some((value) => value === '');

  return (
    <div  className='my-[70px] px-[100px]' id="contactme">
      <h2 className='text-blue-500 font-bold text-3xl pb-3'>Get In Touch</h2>
      <div className='border-b-4 border-blue-200 w-[100px]'/>

      <div className='mt-4 flex flex-col space-y-6'>
        <p ><span className='text-blue-500 text-xl font-semibold'>Email:</span> <span className='text-blue-800'>tokiolaoluwa01.dev@gmail.com</span> </p>
        <p><span className='text-blue-500 text-xl font-medium'>TimeZone:</span> <span className='text-blue-800'>GMT +1 (WAT)</span> </p>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-6'>
          <input className='h-[45px] w-[40%] border-2 border-blue-400 outline-none px-3 rounded-md' type="text" name="user_name" placeholder='John Doe' value={formData.user_name} onChange={handleChange}/>
          <input className='h-[45px] w-[40%] border-2 border-blue-400 outline-none px-3 rounded-md' type="email" name="user_email" placeholder='johndoe@gmail.com' value={formData.user_email} onChange={handleChange}/>
          <input className='h-[45px] w-[40%] border-2 border-blue-400 outline-none px-3 rounded-md' type="text" name="subject" placeholder='I want to Collaborate on a Project...' value={formData.subject} onChange={handleChange}/>

          <textarea className='h-[100pxpx] w-[40%] border-2 border-blue-400 outline-none px-3 py-3 rounded-md' name="message" placeholder='Enter your message...' value={formData.message} onChange={handleChange}/>

          <button type="submit" disabled={isDisabled} className='h-[45px] w-[40%] font-bold text-[#FFFFFF] border-2 border-blue-600 bg-blue-400 rounded-md'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
