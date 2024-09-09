import { ButtonProps } from './../../../app/_components/Button/button-types';
import { ImageProps } from "next/image";
import { AdditionalProps, BannerSectionType, PointCardProps, SectionHeaderProps } from "../SharedProps"

export type CitiDeveloperPageType = {
  banner: BannerSectionType;
  overDecadeOfTrust: OverDecadeOfTrustType;
  ourPhilosophy: OurPhilosophyType;
  ourValues: OurValuesType;
  legacy: LegacySectionType;
}


export type OverDecadeOfTrustType = AdditionalProps & {
  header: SectionHeaderProps;
  animatedText: string;
  images: ImageProps[];
}


export type OurPhilosophyType = AdditionalProps & {
  title: string;
  cards: PointCardProps[];
  image: ImageProps;
}
export type OurValuesType = AdditionalProps & {
  title: string;
  cards: PointCardProps[];
  image: ImageProps;
}

export type LegacySectionType = AdditionalProps & {
  card: {
    title: string;
    subtitle: string;
    description: string;
    button: ButtonProps
  },
  image: ImageProps;
  description: string;
}