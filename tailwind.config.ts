import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      '3xl': '1600px',
      tablet: '481px',
      desktop: '1024px',
    },
    extend: {
      transitionDuration: {
        '4000': '4000ms',
      },
      colors:{
        dark: "#242527",
        gray:{
          450: "#6F6F6F",
        },
        primary: {
          600: "#EBC563",
          900:"#B18F5D"
        },
        warning: {
          100: '#D83730',
        }
      },
      keyframes: {
        slideToBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(10%)' },
          '100%': { opacity: '100%', transform: 'translateY(0)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        smoothTranslateX: {
          "0": {transform: 'translate(-10%,-50%)',},
          "100%": {transform: 'translate(0%,-50%)'},
        },
        imageSlideShow: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        imageSlideShowReverse: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        scaleInOut: {
          '0%': { scale: '1' },
          '50%': { scale: '1.1' },
          '100%': { scale: '1' },
        },
        linearBackgroundMoving: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        slideToBottom: 'slideToBottom 1.5s forwards linear',
        imageSlideShow: 'imageSlideShow 40s infinite  linear',
        imageSlideShowReverse: 'imageSlideShowReverse 40s infinite  linear',
        slideToBottom2: 'slideToBottom 1.5s 500ms forwards linear',
        slideToBottom3: 'slideToBottom 1.5s 1000ms forwards linear',
        fadeInSlideUp: 'fadeInSlideUp 1s 800ms forwards linear',
        smoothTranslateX: 'smoothTranslateX 5s forwards linear',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        linearBackgroundMoving: 'linearBackgroundMoving 4s ease infinite',
        scaleInOut: 'scaleInOut 4s linear infinite',
      },
      backgroundImage: {
      "contact-us-form": "url('/images/footer/contact-us.png')",
      "linear-overlay": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 75%)",
      "linear-dark-banner": "linear-gradient(90deg, rgba(0, 0, 0, 0.9) 8.82%, rgba(0, 0, 0, 0.36) 100%)",
      "linear-popup": "linear-gradient(90deg, #46352c 8.82%, #2f231f 100%)",
      "dark-linear": "linear-gradient(90deg, #000000 43.24%, rgba(0, 0, 0, 0.75) 107.01%);",
      "dark-linear-reverse": "linear-gradient(90deg, rgba(0, 0, 0, 0.25) 14.25%, #000000 36.01%)",
      'linear-black': 'radial-gradient(circle, rgba(45,49,60,1) 0%, rgba(0,0,0,1) 100%)',
      'linear-feature-card': 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.65) 100%)',
      'linear-project-info': 'linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.65) 100%)',
      'linear-reverse-feature-card': 'linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 1) 100%)',
      'linear-primary': 'linear-gradient(91.84deg, rgba(177, 143, 93, 0.2) -10.81%, rgba(177, 143, 93, 0) 108.62%)',
      'linear-border': 'linear-gradient(90deg, #B18F5D -28%, rgba(177, 143, 93, 0) 100.03%)',
      'linear-border-vertical': "linear-gradient(179.06deg, #B18F5D 0.81%, rgba(177, 143, 93, 0) 118.89%)",

      },
      boxShadow: {
        custom: "5px 12px 40px 0px #00000026",
        innerShadow: ' inset  -15px 15px 14px 0px #0000008C'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
