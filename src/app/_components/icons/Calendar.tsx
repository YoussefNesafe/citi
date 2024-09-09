import React, { SVGProps } from 'react'

const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox='0 0 24 24' fill="none" {...props}>
    <g fill="#6F6F6F" clipPath="url(#a)">
      <path d="M22 2.25h-3.25V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 1 0-1.5-.001V2.25h-4.5V.75a.75.75 0 1 0-1.5-.001V2.25H2a2 2 0 0 0-2 1.999v17.75a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4.249a2 2 0 0 0-2-1.999ZM22.5 22a.5.5 0 0 1-.499.5H2a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.499h3.25v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751H22a.5.5 0 0 1 .499.499L22.5 22Z" />
      <path d="M5.25 9h3v2.25h-3V9Zm0 3.75h3V15h-3v-2.25Zm0 3.75h3v2.25h-3V16.5Zm5.25 0h3v2.25h-3V16.5Zm0-3.75h3V15h-3v-2.25Zm0-3.75h3v2.25h-3V9Zm5.25 7.5h3v2.25h-3V16.5Zm0-3.75h3V15h-3v-2.25Zm0-3.75h3v2.25h-3V9Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Calendar