import Button from "@/app/_components/Button";
import Popup from "@/app/_components/Popup";
import { getHighlightedText } from "@/hooks/getHighlightedText";
import { AlluraPopUpType } from "@/models/IDictionary/SharedProps";
import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";




const AlluraPopUpSection = async ({ button, detailsCards, slogan, soon }: AlluraPopUpType) => {
  const soonTitle = getHighlightedText(soon, {
    replaceWith: { start: '<span class="font-bold italic">', end: '</span>' },
  })
  const getTitle = (text: string) => getHighlightedText(text, {
    replaceWith: { start: '<span class="text-primary-600">', end: '</span>' },
  })
  const getDescription = (text: string) => getHighlightedText(text, {
    replaceWith: { start: '<span class="text-primary-600">', end: '</span>' },
  })
  return (
    <Popup>
      <Image src='/images/allura/allura-popup-bg.png' alt="allura-popup-bg" width={1780} height={898} className="absolute top-0 left-0 object-fill w-full h-full" />
      <div className="text-center text-white flex flex-col gap-[3.262vw] tablet:gap-[1.75vw] desktop:gap-[1.144vw] items-center justify-center w-[82vw] tablet:w-[80vw] desktop:w-[55vw]">
        <Image src='/images/allura/allura-logo.png' alt="Allura" width={749} height={269} className="h-auto w-[69.9vw] tablet:w-[50vw] desktop:w-[38.948vw] object-cover" />
        <div className="text-primary-900 text-[3.262vw] tablet:text-[2.5vw] desktop:text-[1.04vw] font-sans capitalize font-medium">{slogan}</div>
        <div className="flex flex-col items-center justify-center gap-[2.33vw] tablet:gap-[1.25vw] desktop:gap-[0.52vw]">
          <div className="text-[6.99vw] tablet:text-[5vw] desktop:text-[4.68vw]" dangerouslySetInnerHTML={{ __html: sanitize(soonTitle) }} />
          <Button {...button} size='md' />
        </div>
        <div className="flex flex-col tablet:flex-row gap-[2.33vw] tablet:gap-[12.5vw] desktop:gap-[8.736vw]">
          {
            detailsCards.map((card, index) => (<div key={index + "-detailsCard"} className="flex tablet:flex-col gap-[2.33vw] tablet:gap-0">
              <div className="text-[4.194vw] tablet:text-[2vw] desktop:text-[1.248vw]" dangerouslySetInnerHTML={{ __html: sanitize(getTitle(card.title)) }} />
              <div className="text-[4.194vw] tablet:text-[2.5vw] desktop:text-[1.56vw] font-extrabold" dangerouslySetInnerHTML={{ __html: sanitize(getDescription(card.description)) }} />
            </div>))
          }
        </div>
      </div>
    </Popup>
  )
}

export default AlluraPopUpSection