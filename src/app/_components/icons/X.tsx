import React, { SVGProps } from 'react'

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={62} height={62} viewBox='0 0 62 62' {...props}>
    <circle cx={31} cy={31} r={30.38} stroke="url(#a)" strokeWidth={1.24} />
    <path
      fill="#fff"
      d="M38.531 20h3.803l-8.308 9.455L43.8 42.32h-7.653l-5.993-7.803-6.859 7.803H19.49l8.887-10.112L19 20h7.847l5.419 7.133L38.53 20Zm-1.334 20.053h2.108L25.701 22.148h-2.262l13.758 17.905Z"
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
export default X