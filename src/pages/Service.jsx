import React from 'react'
import { CiCircleChevRight } from 'react-icons/ci'

export default function Service() {
  return (
    <div className='container'>
      <div className="title">Our Services</div>
      <div className="flex flex-col gap-12 mt-12">
        {
          services.map((service, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-6`}>
              <div className='lg:max-w-[550px] md:max-w-[400px] w-full overflow-hidden aspect-[6/4] flex items-start justify-center rounded-md'>
                <img src={service.img} className='object-cover w-full' alt="civil" />
              </div>
              <div className='space-y-6'>
                <div className="font-medium text-[20px]">{service.title}</div>
                <div className='space-y-2'>
                  {
                    service.list.map((l, j) => (
                      <div key={j} className='flex items-center gap-1'>
                        <CiCircleChevRight />
                        <p>{l}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


const services = [
  {
    title: 'ELECTRICAL',
    img: './images/electrical-service.jpg',
    list: [
      'Power Transmission / Distribution',
      'Residential / Commercial / Industrial / Oil field Installations',
      'Uninterruptible P ower Supply Systems',
      'Fire Detection Systems / Water Leak Detection Systems / Fire Alarm System',
      'Earthing and Lightning Protection Systems Public Address Systems',
      'Central / Satellite TV systems / IPTV Systems',
      'Telephone & Intercom Systems Interior & Exterior Lighting',
      'Central Battery Emergency Lighting Systems Closed Circuit TV Systems',
      'Access Control & Security Systems Building Management Systems',
    ]
  },
  {
    title: 'Civil works',
    img: './images/civil-service.jpg',
    list: [
      'Block work',
      'Plaster works',
      'Floor and Wall Tiling Works',
      'Marble & Granite Fixing “Floor and Wall”',
      'Painting Work',
      'Interlocking and Paver Works',
    ]
  },
  {
    title: 'MEP SERVICES- HVAC System',
    img: './images/hvac-service.png',
    list: [
      'Central Heating Air Conditioning',
      'Chilled Water Systems',
      'Ducted & Non-ducted Split Unit Systems V R V System',
      'Package U nits',
      'Ventilation – F resh Air & Extract Systems HVAC Controls and Monitoring Systems',
      'A/C Duct Fabrication with installation work',
      'Aluminum Cladding works on Pipes & insulated ducts',
      'Installation of Split A/C Work',
      'Installation of Duct Split A/C Work',
      'Air Condition Service and maintenance in UAE / Annual AC Preventative Service Plans in UAE',
      'The annual maintenance contract is available',
    ]
  },
  {
    title: 'Carpentry & Painting',
    img: './images/painting-service.jpeg',
    list: [
      'Wooden Door Installation & Maintenance Wooden Floor',
      'Repair & Installation Gypsum Works',
      'Wooden & Gypsum P artitions All Kinds of P ainting Works',
    ]
  },
]