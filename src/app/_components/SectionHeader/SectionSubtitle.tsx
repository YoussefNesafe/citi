import React from 'react'

const SectionSubtitle = ({ text }: { text: string }) => {
  return (
    <div className='font-medium text-[3.261vw] tablet:text-[1.75vw] desktop:text-[0.936vw] uppercase text-primary-900'>{text}</div>
  )
}

export default SectionSubtitle