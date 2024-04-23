import React from 'react'

export default function About() {
  return (
    <div className='container'>
      <div className="title md:mb-12">About Us</div>
      <div className='space-y-2'>
        <p>Welcome to Shiraji Group, where excellence meets integrity in contracting works. Established in 2011, we have emerged as leaders in the industry, dedicated to creating a better environment for our nation through our construction and engineering expertise.</p>
        <p>At Shiraji Group, our core values revolve around integrity, quality, and client satisfaction. With a team of professionals passionate about their craft, we offer integrated solutions spanning General Contracting, MEP, and Civil works. Our commitment to excellence is evident in every project we undertake.</p>
        <p>Driven by innovation and fueled by a desire for customer satisfaction, we take pride in our transparent transactions and our ability to deliver quality construction solutions. From project inception to completion, our focus remains on meeting and exceeding our clients' expectations.</p>
        <p>Join us on our journey as we continue to build a brighter future, one project at a time. Welcome to Shiraji Group, where our dedication to excellence transforms visions into reality.</p>
      </div>

      <div className='md:grid grid-cols-2 gap-4 mt-8'>
        {
          cards.map((card, i)=>(
            <div key={i} className='sm:p-6 p-4 text-center rounded-md space-y-3 bg-gray-200 border border-gray-300'>
                <img src={card.img} className='max-w-[100px] mx-auto' alt="" />
                <div className="font-semibold text-2xl">{card.title}</div>
                <div>{card.desc}</div>
            </div>
          ))
        }
      </div>

      <div className='mt-12'>
        <img className='' src="./images/structure.png" alt="" />
      </div>

    </div>
  )
}

const cards = [
  {
    img: './images/mission.svg',
    title: 'Mission',
    desc: "At Shiraji Group, our mission is to revolutionize the construction industry by delivering expert contracting services that add substantial value to our clients' projects. Grounded in up-to-date knowledge, quality assurance, safety, and punctual delivery, we aim to be among the leading General Contractors in the UAE and the wider region. Guided by our commitment to excellence, we continuously enhance our services through innovation, training, and a steadfast dedication to exceeding client expectations.",
  },
  {
    img: './images/vision.svg',
    title: 'Vison',
    desc: "Our vision at Shiraji Group is to be a pioneering force in the construction industry, setting new standards of excellence and innovation. We aim to surpass client expectations by consistently delivering high-quality services on time, while prioritizing safety, quality, and respect for our employees' contributions. As a company of choice, we strive to lead the market through innovation and dedication, envisioning a future where Shiraji Group stands as a beacon of excellence in the construction sector.",
  },
]