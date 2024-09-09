import React, { SVGProps } from 'react'

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} viewBox='0 0 62 62' fill="none" {...props}>
    <circle cx={31} cy={31} r={30.38} stroke="url(#a)" strokeWidth={1.24} />
    <path
      fill="#fff"
      d="M27.497 23.793V27.2H25v4.166h2.497V43.75h5.127V31.368h3.44s.323-1.998.48-4.183h-3.9v-2.85c0-.425.559-.998 1.112-.998h2.795V19h-3.8c-5.381 0-5.254 4.17-5.254 4.793Z"
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

export default Facebook