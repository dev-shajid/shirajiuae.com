import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='space-y-8 mb-4'>
      <div style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.85), #0009),url(./images/bg.jpg) center no-repeat', backgroundSize: 'cover' }} className='w-full flex justify-center items-center aspect-[16/10] md:aspect-[16/7] text-white flex-col md:space-y-3'>
        <div className='text-sm sm:text-xl'>Welcome to Construction</div>
        <div className='md:text-5xl text-3xl font-semibold'>Get The <span className='text-yellow-500'>Best</span> Service</div>
        <div className='max-w-[500px] text-center p-4 text-xs sm:text-sm'>No matter where or what you want to build, we mobilize the right experts to drive value and realize your project consistent goals.</div>
      </div>

      <div className='container space-y-5'>
        <div className='title2'>About Us</div>
        <div className='flex md:flex-row justify-center items-center flex-col'>
          <div className='flex-[1]'>
            <img src="./images/logo.png" className='max-w-[300px] mx-auto' alt="" />
          </div>
          <div className='space-y-3 flex-[1]'>
            <div>
              Welcome to Shiraji Group, where excellence meets integrity in contracting works. Established in 2011, we have emerged as leaders in the industry, dedicated to creating a better environment for our nation through our construction and engineering expertise.
            </div>
            <Link to="/about" className='bg-indigo-500 rounded-md inline-flex justify-center items-center py-1.5 px-6 text-white text-sm'>Learn More</Link>
          </div>
        </div>
      </div>

      <div className='container space-y-5'>
        <div className='title2'>Our Services</div>
        <div className="services grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {
            services.map((service, i) => (
              <Link key={i} to='/service' className='p-4 text-center space-y-3 rounded-md bg-gray-800 text-white'>
                <img src={service.img} className='aspect-square rounded-full mx-auto max-w-[100px] object-cover border border-r-gray-500' alt="" />
                <div className='title3'>{service.title}</div>
                <div className='text-sm'>{service.desc}</div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: 'ELECTRICAL',
    img: './images/electrical-service.jpg',
    desc: 'LOW VOLTAGE SYSTEM, FIRE FIGHTING SYSTEM, BUILDING MANAGEMENT SYSTEM',
  },
  {
    title: 'Civil works',
    img: './images/civil-service.jpg',
    desc: "WE OFFER INSTALLATION, TESTING & COMMISSIONING AND MAINTENANCE WORKS FOR A BROAD RANGE OF APPLICATIONS TO MEET OUR CLIENTS' NEEDS.",
  },
  {
    title: 'MEP SERVICES- HVAC System',
    img: './images/hvac-service.png',
    desc: 'DESIGN AND DRAFTING OF SHOP DRAWINGS & ASBUILT DRAWINGS COMPLYING AS PER ADDC SPECIFICATION.',
  },
  {
    title: 'Carpentry & Painting',
    img: './images/painting-service.jpeg',
    desc: 'PLUMBING SYSTEM, HVAC SYSTEM, AIR CONDITIONING SYSTEMS, MECHANICAL VENTILATION SYSTEMS',
  },
]