import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {ReactTyped} from "react-typed";
import img from '../../assets/profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const social = [
    {
      link: 'https://www.linkedin.com/in/aman-tripathi-701880227/',
      icon: <FaLinkedinIn />,
    },
    {
      link: 'https://github.com/Aman4017',
      icon: <AiFillGithub />,
    },
    {
      link: 'https://x.com/AmanTripat42119',
      icon: <FaXTwitter />,
    },
    {
      link: 'https://www.instagram.com/aman_tripathi4017/',
      icon: <FaInstagram />,
    }
  ]

  return (
    <div id='Home' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center h-screen overflow-x-hidden'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[32px] md:text-[42px] lg:text-[52px] font-semibold leading-normal'>
          Hi There! <span className="shake">👋🏻</span>
        </h1>
        
        <h1 className='text-[22px] md:text-[32px] lg:text-[42px] font-semibold mb-8 leading-normal text-fuchsia-600'>
          I'm{' '}
          <ReactTyped
            strings={['a Full Stack Developer', 'a Software Developer', 'an Open Source Developer']}
            typeSpeed={50}
            backSpeed={30}
            loop
            className='text-fuchsia-600'
          />
        </h1>
        
        <p data-aos='fade-left' className="mt-4 text-base md:text-sm lg:text-base">
          Hi, I'm a dedicated web developer based in Rajasthan, India. Drawing from a foundation in cloud computing and proficient knowledge of AWS services, I am constantly expanding my expertise in web development. With a diverse skill set, I aim to contribute innovatively to every project.
        </p>
        
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a key={index} target="_blank" rel="noopener noreferrer" href={social.link} className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                  <div className='text-[24px] md:text-[28px] lg:text-[32px]'>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <img data-aos='fade-up' src={img} alt="" className='rounded-full border-2 p-1 border-fuchsia-500 img_glow w-48 md:w-60 lg:w-72 h-48 md:h-60 lg:h-72' />
    </div>
  )
}

export default Home
