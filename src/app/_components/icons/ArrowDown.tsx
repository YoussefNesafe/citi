import React, { SVGProps } from 'react'

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={31}
    viewBox="0 0 40 31"
    fill="none"
    {...props}
  >
    <path fill={props.fill || "#B18F5D"} fillOpacity={props.fillOpacity || 0.6} d="M39.5 0H0l20 30.5L39.5 0Z" />
  </svg>
)

export default ArrowDown