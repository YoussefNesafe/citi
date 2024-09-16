import { ButtonProps } from "@/app/_components/Button/button-types";
import { CardProps } from "@/app/_components/Card/types";
import { IMAGES_MAP_TYPE } from "@/constants/aveline_images_maps";
import { ImageProps } from "next/image";
import { HTMLAttributeAnchorTarget, HTMLAttributes, ReactElement } from "react";
export type AdditionalProps = HTMLAttributes<HTMLElement>

export type SectionHeaderProps = AdditionalProps & {
  subtitle?: string;
  title?: string;
  description?: string;
}

export type VisitExperienceCenterSectionProps = AdditionalProps & {
  header: SectionHeaderProps;
  videoSrc: string;
  button?: ButtonProps;
}

export type LatestNewsProps = AdditionalProps & {
  header: SectionHeaderProps;
  button: ButtonProps;
  mainArticle: CardProps;
  cards: CardProps[];
}

export type ErrorMessagesProps = {
  email: string;
  minLength: string;
}
export type CountriesListProps = {
  value: any;
  label: string;
}[]

export type BannerSectionType = AdditionalProps & {
  backgroundImage: ImageProps;
  overlay?: boolean;
  image: ImageProps;
  buttons: ButtonProps[];
}
export type PointCardProps = {
  image: ImageProps;
  title: string;
  description: string;
}

export type ManagerCardType = {
  image: ImageProps;
  name: string;
  position: string;
}

export type FloatingCardWithImageType = {
  image: AdditionalProps & ImageProps;
  cardComponent: ReactElement;
}

export type SwiperSectionType = AdditionalProps & {
  title: string;
  imagesArray: IMAGES_MAP_TYPE;
  button?: ButtonProps;
  imageClassName?: string;
  slideClassName?: string;
  animateFrom?: 'top' | 'left' | 'right' | 'bottom'
}

export type ApartmentsCardsType = AdditionalProps & { 
  title: string;
  cards : {
    image: ImageProps;
    button : ButtonProps;
  }[]
}


export type PhotoCardType = AdditionalProps & { image: ImageProps; button: ButtonProps,target?:HTMLAttributeAnchorTarget }


export type AlluraPopUpType = {
  slogan: string;
  soon: string;
  button: ButtonProps;
  detailsCards: { title: string; description: string }[]

}

export type MetaDataType = {
  title: string;
  description: string;
  keywords: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

export type ProjectBriefSectionType = AdditionalProps & {
  image: ImageProps;
  title: string;
  button: ButtonProps;
  article: {
    title: string;
    description: string
  },
}


type ContactOption = {
  icon: string;
  list: string[];
}
export enum FormType {
  contactUs = "contactUs",
  projectsPagesContacts = "projectsPagesContacts"
}
export type FormProps = AdditionalProps & {
  title: string;
  description: string;
  disclaimer: string;
  contactOptions?: ContactOption[]; 
  submit: string;
  formType: FormType;
  fields: {[key: string]: object | any}[];
  leadSource: string;
}