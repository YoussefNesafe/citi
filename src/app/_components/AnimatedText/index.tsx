export const AnimatedText = ({ text }: { text: string }) => (
  <div className='animatedText text-primary-600 text-[2.796vw] tablet:text-[1.75vw] desktop:text-[1.04vw] h-[30.29vw] tablet:h-[33.25vw] desktop:h-[13.832vw] w-[30.29vw] tablet:w-[33.25vw] desktop:w-[13.832vw] rounded-full relative'>
    {
      text.split("").map((char, index) => <span key={index + "char"} style={{
        transform: `rotate(${index * 7}deg)`
      }}>{char}</span>)
    }
  </div>
)