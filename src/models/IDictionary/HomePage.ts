import { ButtonProps } from "@/app/_components/Button/button-types";
import { ImageProps } from "next/image"
import { AdditionalProps, MetaDataType, PointCardProps, SectionHeaderProps, VisitExperienceCenterSectionProps } from "./SharedProps";
import { CardProps } from "@/app/_components/Card/types";


export type HomePageProps = {
  metadata: MetaDataType;
  banner: HomePageBannerProps;
  counterCards: CountUpSectionProps;
  whatMakesUsDifferent: WhatMakesUsDifferentSectionProps;
  avelineSection: AvelineSectionProps;
  visitExperienceCenter :VisitExperienceCenterSectionProps;
  ourJourney: OurJourneySectionProps;
  ourTeam : OurTeamSectionType;
}

// Banner Props
export type  HomePageBannerProps = AdditionalProps & {
    sloganBox : {
      title: string;
      description: string;
    },
    firstLayerData: {
      image: ImageProps;
      startText: string;
    },
    secondLayerData: {
      image: ImageProps;
      luxuary: string;
    },
    thirdLayerData: {
      image: ImageProps;
      button: ButtonProps;
      title:string;
      sloganText: string;
    }
}

// CountUp Section Props
export type CountUpSectionProps = CountUpCardProps[]
export type CountUpCardProps = {
  number: number;
  text: string;
  suffix?: string;
}

// What Makes Us Different Section Props
export type WhatMakesUsDifferentSectionProps ={
  header: SectionHeaderProps;
  cards: PointCardProps[];
  animatedText: string;
  images: ImageProps[];
}




// Our Journey Section Props

export type OurJourneySectionProps = AdditionalProps & {
  header: SectionHeaderProps;
  cards: CardProps[]; 
}

// Aveline Section Props

export type AvelineSectionProps = AdditionalProps & {
  header: SectionHeaderProps;
  images: ImageProps[];
}


export type OurTeamSectionType = AdditionalProps &{
  header: SectionHeaderProps;
  image: ImageProps;
  buttons: ButtonProps[];
}