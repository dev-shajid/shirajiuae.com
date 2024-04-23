import React from 'react'
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from 'react-icons/io5';

export default function Contact() {
  return (
    <>
      <div className='container'>
        <div className="title">Contact Us</div>
        <div className="cards grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 text-white">

          <div className="card bg-gray-800 text-center p-4 rounded-md space-y-4">
            <CiLocationOn className='text-6xl  mx-auto' />
            <div className='space-y-2'>
              <div className='font-semibold text-xl'>Office Address</div>
              <div>
                <p className='max-w-[300px] mx-auto'>Confident Executive Business center, 1st Floor, Tawjeeh Building Block B, Office No. 89 –, Street No.15, Mussaffah-M9, Abu Dhabi (U.A.E)</p>
              </div>
            </div>
          </div>

          <div className="card bg-gray-800 text-center p-4 rounded-md space-y-4">
            <CiMail className='text-6xl  mx-auto' />
            <div className='space-y-2'>
              <div className='font-semibold text-xl'>Email</div>
              <div className='flex flex-col'>
                <a href="mailto:info@shirajiuae.com">info@shirajiuae.com</a>
              </div>
            </div>
          </div>

          <div className="card bg-gray-800 text-center p-4 rounded-md space-y-4">
            <IoCallOutline className='text-6xl  mx-auto' />
            <div className='space-y-2'>
              <div className='font-semibold text-xl'>Phone</div>
              <div className='flex flex-col'>
                <a href="tel:+97124488449">+97124488449</a>
                <a href="tel:+971559425653">+971559425653</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <iframe className='!border-none w-full h-[450px] mt-8' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14536.065874904867!2d54.5097125!3d24.3807305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41940f50b785%3A0x7f48504b9f42a327!2sShiraji%20General%20Contracting!5e0!3m2!1sen!2sbd!4v1713868889377!5m2!1sen!2sbd" allowFullscreen="" referrerPolicy="no-referrer-when-downgrade" />
    </>
  )
}
