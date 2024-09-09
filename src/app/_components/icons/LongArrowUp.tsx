import React, { SVGProps } from 'react'

const LongArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={21}
    viewBox="0 0 16 21"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.707.293a1 1 0 0 0-1.414 0L.929 6.657A1 1 0 0 0 2.343 8.07L8 2.414l5.657 5.657a1 1 0 1 0 1.414-1.414L8.707.293ZM9 21V1H7v20h2Z"
    />
  </svg>
)

export default LongArrowUp