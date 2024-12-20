import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Nav() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contactme');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const contactSection = document.getElementById('aboutme');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='w-[100%] z-50 fixed bg-[#02142c] px-[100px] pt-[10px] pb-2 shadow-md border-b-2 border-blue-100'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex justify-between items-center">
        <div>
          <p className='text-[#ffffff] font-bold text-2xl'>Olaoluwa</p>
        </div>
        <div className='flex space-x-5 text-[#ffffff] items-center text-xl'>
          <p className='cursor-pointer' onClick={handleScrollToAbout}>About Me</p>
          <p className='cursor-pointer' onClick={handleScrollToContact}>Get In Touch</p>
          <a
            href="https://drive.google.com/file/d/18DXM5w-05tma4ueqy0l4lwctcb4wJ1EL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='border-blue-200 border-[3px] rounded-[10px] p-2'
          >
            View Resume
          </a>
        </div>
      </div>
      
    </div>
  )
}

