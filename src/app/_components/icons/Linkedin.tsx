import React, { SVGProps } from 'react'

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={62} height={62} viewBox='0 0 62 62' {...props}>
    <circle cx={31} cy={31} r={30.38} stroke="url(#a)" strokeWidth={1.24} />
    <path
      fill="#fff"
      d="M23.96 22.481A2.48 2.48 0 1 1 19 22.48a2.48 2.48 0 0 1 4.96.002Zm.074 4.315h-4.96v15.525h4.96V26.796Zm7.837 0h-4.935v15.525h4.886v-8.147c0-4.538 5.914-4.96 5.914 0v8.147h4.898v-9.833c0-7.65-8.754-7.366-10.812-3.608l.05-2.084Z"
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
export default Linkedin