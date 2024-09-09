import { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import { ButtonProps } from "../Button/button-types";

export enum CardType  {
  POINT_CARD = 'point_card',
  JOURNEY_CARD= 'journey_card',
  NEWS_BLOGS_CARD= 'news_blogs_card'
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  type:  CardType;
  date?: string;
  image?: ImageProps;
  button?: ButtonProps;
  readMore?: string;
  classNames?:{
    title?: string;
    description?: string;
    contentWrapper?: string;
  }
}