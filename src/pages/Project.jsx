import React from 'react'

export default function Project() {
  return (
    <div className='space-y-4'>


      <div>
        <div className="title2 text-center font-semibold">Ongoing Projects</div>
        <div class="relative overflow-x-auto max-w-[1200px] w-full p-4 mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
            <thead class="text-sm text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-6 py-3">
                  SL No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Name of Projects
                </th>
                <th scope="col" class="px-6 py-3">
                  Name of client
                </th>
                <th scope="col" class="px-6 py-3">
                  consultant/main contractor
                </th>
                <th scope="col" class="px-6 py-3">
                  scope of works
                </th>
              </tr>
            </thead>
            <tbody>
              {
                ongoing.map((project, i) => (
                  <tr key={i} class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td class="px-6 py-4">
                      {project.name}
                    </td>
                    <td class="px-6 py-4">
                      {project.client}
                    </td>
                    <td class="px-6 py-4">
                      {project.contractor}
                    </td>
                    <td class="px-6 py-4">
                      {project.scope}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


      <div>
        <div className="title2 text-center font-semibold">Completed Projects</div>
        <div class="relative overflow-x-auto max-w-[1200px] w-full p-4 mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
            <thead class="text-sm text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-6 py-3">
                  SL No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Name of Projects
                </th>
                <th scope="col" class="px-6 py-3">
                  Name of client
                </th>
                <th scope="col" class="px-6 py-3">
                  consultant/main contractor
                </th>
                <th scope="col" class="px-6 py-3">
                  scope of works
                </th>
              </tr>
            </thead>
            <tbody>
              {
                completed.map((project, i) => (
                  <tr key={i} class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td class="px-6 py-4">
                      {project.name}
                    </td>
                    <td class="px-6 py-4">
                      {project.client}
                    </td>
                    <td class="px-6 py-4">
                      {project.contractor}
                    </td>
                    <td class="px-6 py-4">
                      {project.scope}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}


const ongoing = [
  {
    name: 'PEARL BA Y MIX DEVELOPMENT PROJECT, CITY OF LIGHTS SECTOR RT 3 , PLOT NO.C13 AL- REEM ISLAND, ABU DHABI UAE',
    client: 'AL-TAMOUH INVESTMENT LLC',
    contractor: 'ACG',
    scope: <>Electrical<br />(Project Amount = AED 1,354,253.00)</>,
  },
  {
    name: 'COMMERCIAL DEVELOPMENT IN ABU DHABI EQUESTRAIN CLUB (COMMERCIAL MALL), AL MUSRIF, ABU DHABI',
    client: 'ABU DHABI EQUESTRAIN CLUB',
    contractor: 'BAINONA',
    scope: <>Electrical<br />(Project Amount = AED 600,000.00)</>,
  },
  {
    name: 'EQUESTRIAN ART FOUNDATION, PLOT P5, SECTOR JN, AL JUBAIL ISLAND, ABU DHABI, UAE',
    client: 'JUBAIL ISLAND INVESTMENT - SOLE PROPRIETORSHIP L.L.C.',
    contractor: 'CEO',
    scope: <>Electrical<br />(Project Amount = AED 900,000.00)</>,
  },
  {
    name: 'PROPOSED NEW 4B+G+ M+ 25 STOREYS+ROOF COMMERCIAL BUILDING ON SECTOR W5, PLOT C3_C4, ABU DHABI ISLAND, ABU DHABI.',
    client: 'AL NAHDHA INVESTMENT LLC',
    contractor: 'BAINONA',
    scope: <>Electrical<br />(Project Amount = AED 1,650,000.00)</>,
  },
]

const completed = [
  {
    name: 'ABU DHABI UNIVERSITY AL-AIN CAMPUS',
    client: 'ABU DHABI UNIVERSITY',
    contractor: 'KHA TIB & ALAMI',
    scope: <>MEP<br />(Project Amount = AED 4,600,000.00)</>,
  },
  {
    name: 'AD HOC-179- MALE CAR PARK EXP ANSION PROJECT ZAYED UNIVERSITY , ABU DHABI',
    client: 'SERCO',
    contractor: 'Canadian Roads Transport and Civil Engineering Consultancy',
    scope: <>CIVIL<br />(Project Amount = AED 1,500,000.00)</>,
  },
  {
    name: 'OFFICE BUILDING (PLOTNO:127a,SECTOR:MADIN AT ZAYED )',
    client: 'DEP ARTMENT OF ECONOMIC DEVELOPMENT',
    contractor: 'PIONEER',
    scope: <>CIVIL<br />(Project Amount = AED 2,500,000.00)</>,
  },
  {
    name: 'COMMERCIAL BUILDING (ZONE: AL QA TTARA, SECTOR NO : NDOOD JHAM, PLOT NO :02-14-041-04)',
    client: 'HAMDAN RASHED ALI HAMAD ALDEREI',
    contractor: 'AL MAGHRIB AL ARABI ENGINEERING CONSULTANT',
    scope: <>CIVIL<br />(Project Amount = AED 97,000.00)</>,
  },
  {
    name: 'PROPOSED NEW G+M+3+R COMMERCIAL BUILDING ON SECTOR BANIYAS EAST 2-3, PLOT C19, ABU DHABI',
    client: 'MR. SALEM BUHAQEB AL SHAMSI',
    contractor: 'BAINONA ENGINEERING CONSULTANCY',
    scope: <>MEP<br />(Project Amount = AED 3,800,000.00)</>,
  },
  {
    name: 'ABU DHABI FUTURE SCHOOLS PROGRAM (PHASE 9) AL BA TEEN',
    client: 'DEP ARTMENT OF EDUCA TION & KNOWLEDGE',
    contractor: 'MUSANADA',
    scope: <>MEP<br />(Project Amount = AED 4,500,000.00)</>,
  },
  {
    name: 'ABU DHABI FUTURE SCHOOLS PROGRAM AL YAHAR',
    client: 'DEP ARTMENT OF EDUCA TION & KNOWLEDGE',
    contractor: 'MUSANADA',
    scope: <>MEP<br />(Project Amount = AED 4,500,000.00)</>,
  },
  {
    name: 'STRIP MALL',
    client: 'ENVIRONMENT AGENCY ABU DHABI',
    contractor: 'INTERCITY ENGINEERING CONSULTANCY LLC',
    scope: <>Electrical<br />(Project Amount = AED 1,650,000.00)</>,
  },
  {
    name: 'CCTV Installation for SEHA AHS Health Care Facilities',
    client: 'SEHA',
    contractor: 'GOLDEN SHIELD',
    scope: <>ELCTRICAL & CIVIL<br />(Project Amount = AED 3,850,000.00)</>,
  },
  {
    name: 'PROPOSED SHOPS, SHEDS & OFFICES',
    client: 'HAMAD ADNAN HAMAD MOHAMED ALHAMMADI',
    contractor: 'LEADERS CONSULTANTS FOR ENGINEERING CONSULTANTS',
    scope: <>MEP<br />(Project Amount = AED 1,750,000.00)</>,
  },
  {
    name: 'THE NA TIONAL AQURIUM',
    client: 'AL QANA',
    contractor: 'ICCC',
    scope: <>ELCTRICAL<br />(Project Amount = AED 3,280,000.00)</>,
  },
  {
    name: 'AL- AIN CENTER FOR CARE AND REHABILITATION OF DISABLE, AL- AIN, UAE',
    client: 'AL- AIN CENTER FOR CARE AND REHABILITA TION OF DISABLE',
    contractor: 'STH SOCIETY TECHNOLOGY HOUSE LLC',
    scope: <>MEP<br />(Project Amount = AED 2,150,000.00)</>,
  },
]