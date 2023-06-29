import React from 'react'
import Workitem from './Workitem'

const data = [
  {
    year: 2021, 
    title: 'Frontend Developer',
    company: '@LollyMatt Technologies',
    duration: '2 Years',
    details: ''
  },
  {
    year: 2020, 
    title: 'WordPress Developer',
    company: '@LollyMatt Technologies',
    duration: '1 Year',
    details: ''
  },
  {
    year: 2019, 
    title: 'Service Executive',
    company: '@First Bank of Nigeria Ltd',
    duration: '9 Years',
    details: ''
  }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem 
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          details={item.details}
       />
      ))}
    </div>
  )
}

export default Work