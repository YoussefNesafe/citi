import React, { SVGProps } from 'react'

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M21.6 11.4a.6.6 0 0 0-.6-.6H7.43a.6.6 0 1 0 0 1.2H21a.6.6 0 0 0 .6-.6Zm0-4.8A.6.6 0 0 0 21 6H3a.6.6 0 1 0 0 1.2h18a.6.6 0 0 0 .6-.6Zm0 9.6a.6.6 0 0 0-.6-.6H3a.6.6 0 1 0 0 1.2h18a.6.6 0 0 0 .6-.6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Menu