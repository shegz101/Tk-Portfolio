import React from 'react'
import reactIcon from '../../assets/react.jpeg'

export function MySkills() {
    const skills = [
        { title: "React", image: reactIcon },
        { title: "React", image: reactIcon },
        { title: "React", image: reactIcon },
        { title: "React", image: reactIcon },
        { title: "React", image: reactIcon },
    ]
  return (
    <div className='my-[70px] px-[100px]'>
      <h2 className='text-blue-500 font-bold text-3xl pb-3'>My Skills</h2>
      <div className='border-b-4 border-blue-200 w-[100px]'/>

      {/* My skills boxes */}
      <div className='flex gap-8 mt-5'>
        {
            skills.map((skill) => (
                <div className='flex flex-col justify-centerh-[100px] w-[100px] border-2 border-[#FFFFFF] rounded-md p-2 text-center shadow-lg shadow-blue-200 items-center'>
                    <img src={skill.image} alt="React Icon" className='w-10 h-10'/>
                    <p className='text-blue-600'>{skill.title}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
