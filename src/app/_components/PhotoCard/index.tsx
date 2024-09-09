import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PhotoCardType } from "@/models/IDictionary/SharedProps";

const Content = ({ image, title }: { image: ImageProps; title: string }) => <>
  <div className='w-full h-[27.96vw] tablet:h-[12.5vw] desktop:h-[13vw] rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] overflow-hidden'>
    <Image {...image} alt={image.alt} className='w-full h-full object-cover hover:scale-105 transition-all' />
  </div>
  <p className='text-center pt-[2.33vw] tablet:pt-[1.875vw] desktop:py-[0.884vw] text-[3.728vw] tablet:text-[2.25vw] desktop:text-[1.248vw] font-sans'>{title}</p></>


const PhotoCard = ({ button, image, target, className, ...props }: PhotoCardType) => {



  return <Link href={button.href || '/'} className={cn('shadow-custom bg-white w-[39.61vw] tablet:w-[20vw] desktop:w-[18.304vw] flex flex-col p-[3.495vw] tablet:p-[1.875vw] desktop:p-[0.78vw] rounded-[0.932vw] tablet:rounded-[0.5vw] desktop:rounded-[0.208vw] border-b-[0.466vw] tablet:border-b-[0.25vw] desktop:border-b-[0.104vw] border-primary-900', className)} {...props} {...button} target={target}>
    <Content title={button.title} image={image} />
  </Link>


}

export default PhotoCard