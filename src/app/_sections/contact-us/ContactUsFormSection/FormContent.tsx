import Address from "@/app/_components/icons/Address"
import Mail from "@/app/_components/icons/Mail"
import Phone from "@/app/_components/icons/Phone"
import SocialMediaLinks from "@/app/_components/SocialMediaLinks"
import { getHighlightedText } from "@/hooks/getHighlightedText"
import { cn } from "@/lib/utils"
import { FooterProps } from "@/models/IDictionary/Layout"
import { AdditionalProps, FormProps } from "@/models/IDictionary/SharedProps"
import { sanitize } from "isomorphic-dompurify"

const ICONS_MAP = {
  phone: <Phone className='w-[3.728vw] tablet:w-[2.5vw] desktop:w-[1.56vw] h-auto' />,
  mail: <Mail className='w-[3.728vw] tablet:w-[2.5vw] desktop:w-[1.56vw] h-auto' />,
  address: <Address className='w-[4.66vw] tablet:w-[2.5vw] desktop:w-[1.56vw] h-auto' />
}


type SocialMediaLinksProps = Pick<FooterProps, "socialMediaLinks">
type FormContentProps = FormProps & SocialMediaLinksProps

const FormContent = ({ title, description, contactOptions, className, socialMediaLinks }: FormContentProps) => {


  const formattedText = (text: string) => getHighlightedText(text, {
    replaceWith: { start: '<span class="font-bold block">', end: '</span>' },
  })
  return <div className={cn('w-full text-white overflow-hidden rounded-[2.796vw] tablet:rounded-[1.5vw] desktop:rounded-[0.624vw] desktop:max-w-[31.512vw] p-[5.825vw] tablet:p-[4.375vw] desktop:p-[2.6vw] bg-contact-us-form bg-cover bg-center', className)}>
    <div className='absolute top-0 left-0 w-full h-full bg-dark/70' />
    <div className='text-primary-600 font-semibold text-[5.126vw] tablet:text-[3vw] desktop:text-[2.288vw] leading-[1.25] desktop:mb-[0.728vw] '>{title}</div>
    <div className='text-[14] tablet:text-[1.75vw] desktop:text-[0.936vw] leading-[1.25] mb-[5.825vw] tablet:mb-[3.125vw] desktop:mb-[5.2vw] '>{description}</div>

    <div className='flex flex-col gap-[3.495vw] tablet:gap-[1.875vw] desktop:gap-[1.56vw] mb-[9.087vw] tablet:mb-[4.875vw] desktop:mb-[3.9vw] '>
      {contactOptions && contactOptions.map(({ icon, list }, index) => (
        <div className='flex gap-[3.728vw] tablet:gap-[2vw] desktop:gap-[1.56vw] items-start' key={index + "contact"}>
          {ICONS_MAP[icon as keyof typeof ICONS_MAP]}
          <div className='flex flex-col gap-[1.864vw] tablet:gap-[1vw] desktop:gap-[0.52vw]'>
            {
              list.map((item, idx) => <div key={idx + "idx"} className='text-[3.262vw] tablet:text-[1.75vw] desktop:text-[0.936vw]' dangerouslySetInnerHTML={{ __html: sanitize(formattedText(item)) }} />)
            }
          </div>
        </div>
      ))}
    </div>
    <SocialMediaLinks links={socialMediaLinks} className='w-full tablet:w-full desktop:w-full justify-center' iconClassName='w-[9.32vw] h-[9.32vw] tablet:w-[5vw] tablet:h-[5vw]' />
  </div>
}

export default FormContent