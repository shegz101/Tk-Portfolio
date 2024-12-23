import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrGithub } from "react-icons/gr";

export function Footer() {
  return (
    <footer className='bg-[#02142c] relative flex justify-between text-white py-4 pl-[20px] pr-[60px] md:px-[100px]'>
        <div className='flex flex-col space-y-3'>
            <div>
                <p className="text-sm">Copyright © 2024, Toki Olaoluwa</p>  
            </div>

            <div className='flex space-x-4'>
                <a
                    href="https://github.com/laolu-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-md hover:opacity-80 transition"
                >
                    <GrGithub className="w-6 h-6 text-blue-800"/>
                </a>

                <a
                    href="https://x.com/laolu_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-md hover:opacity-80 transition"
                >
                    <RiTwitterXFill className="w-6 h-6 text-blue-800"/>
                </a>

                <a
                    href="https://www.linkedin.com/in/laolu-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-md hover:opacity-80 transition"
                >
                    <TiSocialLinkedin className="w-6 h-6 text-blue-800"/>
                </a>
            </div>
        </div>

        <div>
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="top-1/2 absolute transform -translate-y-1/2 bg-white text-[#02142c] font-black text-3xl w-10 h-12 rounded-md shadow-md flex items-center justify-center hover:opacity-80 transition"
            >
                <span className='font-black text-[#02142c]'>↑</span>
            </button>  
        </div>
    </footer>
  )
}



