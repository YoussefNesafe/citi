import React, { SVGProps } from 'react'

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={62} height={62} viewBox='0 0 62 62' {...props}>
    <circle cx={31} cy={31} r={30.38} stroke="url(#a)" strokeWidth={1.24} />
    <path
      fill="#fff"
      d="M28.6 34.72 35.035 31 28.6 27.28v7.44Zm14.334-9.71c.161.583.273 1.365.347 2.357.087.992.124 1.847.124 2.591L43.48 31c0 2.715-.199 4.712-.546 5.989-.31 1.116-1.03 1.835-2.145 2.145-.583.161-1.65.273-3.286.347a82.642 82.642 0 0 1-4.452.124l-1.971.075c-5.196 0-8.432-.199-9.71-.546-1.116-.31-1.835-1.029-2.145-2.145-.16-.583-.273-1.364-.347-2.356a29.835 29.835 0 0 1-.124-2.592L18.68 31c0-2.716.198-4.712.545-5.99.31-1.115 1.03-1.835 2.145-2.145.583-.16 1.65-.272 3.287-.347a82.646 82.646 0 0 1 4.451-.124l1.972-.074c5.195 0 8.432.198 9.709.545 1.116.31 1.835 1.03 2.145 2.146Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-5.5}
        x2={66}
        y1={0}
        y2={77.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={0.46} stopColor="#fff" stopOpacity={0} />
        <stop offset={0.965} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)

export default Youtube