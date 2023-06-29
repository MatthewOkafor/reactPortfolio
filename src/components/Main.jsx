import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover scale-x-[-1]' src="https://images.unsplash.com/photo-1534772431209-cd73174d9593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2l0dGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-3xl text-4xl font-bold text-gray-800'>I'm Matthew Okafor</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            A
            <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Frontend Developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'WordPress Developer',
          1000,
          'Digital Marketer',
          1000,
          'Coder',
          1000,
          'Tech Enthusiast',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
        repeat={Infinity}
        />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://twitter.com/MOkaforDev" target='_blank'><FaTwitter className='cursor-pointer' size={20} /></a>
            <a href="https://web.facebook.com/OkaforMatthewEziuno" target='_blank'><FaFacebookF className='cursor-pointer' size={20} /></a>
            <a href="https://github.com/MatthewOkafor" target='_blank'><FaGithub className='cursor-pointer' size={20} /></a>
            <a href="https://www.instagram.com/mokafordev/" target='_blank'><FaInstagram className='cursor-pointer' size={20} /></a>
            <a href="https://www.linkedin.com/in/matthew-okafor-04112219a/" target='_blank'><FaLinkedinIn className='cursor-pointer' size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main