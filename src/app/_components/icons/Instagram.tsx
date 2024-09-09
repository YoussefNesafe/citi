import React, { SVGProps } from 'react'

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={62} height={62} viewBox='0 0 62 62' {...props}>
    <circle cx={31} cy={31} r={30.38} stroke="url(#a)" strokeWidth={1.24} />
    <path
      fill="#fff"
      d="M26.231 18.6h10.416a7.197 7.197 0 0 1 7.192 7.192v10.416a7.192 7.192 0 0 1-7.192 7.192H26.231a7.197 7.197 0 0 1-7.192-7.192V25.792a7.192 7.192 0 0 1 7.192-7.192Zm-.248 2.48a4.464 4.464 0 0 0-4.464 4.464v10.912a4.461 4.461 0 0 0 4.464 4.464h10.912a4.464 4.464 0 0 0 4.464-4.464V25.544a4.461 4.461 0 0 0-4.464-4.464H25.983Zm11.966 1.86a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1Zm-6.51 1.86a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4Zm0 2.48a3.72 3.72 0 1 0 0 7.44 3.72 3.72 0 0 0 0-7.44Z"
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

export default Instagram