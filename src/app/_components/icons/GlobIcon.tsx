import React, { SVGProps } from 'react'

const GlobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12.5c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 2.55s3 3.95 3 9.95c0 6-3 9.95-3 9.95m-2 0S8 18.5 8 12.5c0-6 3-9.95 3-9.95M2.63 16h18.74M2.63 9h18.74"
    />
  </svg>)
export default GlobIcon