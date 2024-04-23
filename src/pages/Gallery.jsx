import React from 'react'

export default function Gallery() {
  return (
    <div className='container'>
        <div className="title">Gallery</div>
        <div className='grid lg:grid-cosls-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8'>
            {
                images.map((img, i)=>(
                    <div key={i} className='aspect-video bg-gray-400 rounded-md'>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

const images=[
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]
