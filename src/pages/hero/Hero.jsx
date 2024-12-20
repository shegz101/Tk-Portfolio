import Avatar from '../../assets/avatar.jpg'
import TypeWriter from '../../utils/TypeWriter'

export function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contactme');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex bg-[#02142c] justify-between pt-[120px] pb-[70px] px-[100px] gap-[70px] w-[100%] items-center'>
      <div className='space-y-8 w-[70%]'>
        <div className='space-y-8'>
          <p className='text-blue-500 font-bold text-3xl'>Hi, I'm Olaoluwa! 👋🏽</p>
          {/* The TypeWriting Function */}
          <TypeWriter texts={[
            "Mobile Developer",
            "IOT Developer",
            "Flutter & Swift Developer",
            "IOT Instructor"
          ]}
          typingSpeed={120} // Optional
          pauseDuration={1500} // Optional
          styling="font-medium text-[#ffffff] text-3xl"
          />
        </div>

        <div className='space-y-12 text-[#ffffff]'>
            <div>
              <p className='text-2xl font-semibold'>Turning 0's and 1's into a solution, One Line at a Time.</p>
            </div>

            {/* Buttons */}
            <div className='flex gap-8'>
              <button onClick={handleScrollToContact}  className='border-blue-200 border-[3px] rounded-[10px] p-2'>Contact Me</button>
              
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

      {/* The Avatar */}
      <div className='w-[50%]'>
        <img src={Avatar} alt="Avatar" className='rounded-full w-[450px] h-[400px] object-cover"'/>
      </div>
    </div>
  )
}
