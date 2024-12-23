import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false); // Close the navigation after clicking
  };

  return (
    <div className="w-full z-50 fixed bg-[#02142c] px-[20px] md:px-[100px] pt-[10px] pb-2 shadow-md md:border-b-2 border-blue-100">
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
          <p className="text-[#ffffff] font-bold text-2xl">Olaoluwa</p>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 text-[#ffffff] items-center text-xl">
          <p
            className="cursor-pointer"
            onClick={() => handleScrollToSection("aboutme")}
          >
            About Me
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleScrollToSection("contactme")}
          >
            Get In Touch
          </p>
          <a
            href="https://drive.google.com/file/d/18DXM5w-05tma4ueqy0l4lwctcb4wJ1EL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-blue-200 border-[3px] rounded-[10px] p-2"
          >
            View Resume
          </a>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <RxHamburgerMenu
            className="text-[#FFFFFF] font-extrabold text-3xl cursor-pointer"
            onClick={() => setIsNavOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-[#02142c] text-white shadow-lg transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
        <div className="flex flex-col space-y-8 items-start px-6 mt-10 text-xl">
          <p
            className="cursor-pointer"
            onClick={() => handleScrollToSection("aboutme")}
          >
            About Me
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleScrollToSection("contactme")}
          >
            Get In Touch
          </p>
          <a
            href="https://drive.google.com/file/d/18DXM5w-05tma4ueqy0l4lwctcb4wJ1EL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-blue-200 border-[3px] rounded-[10px] p-2"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
