import { ImageProps } from "next/image";
import { AdditionalProps, MetaDataType, SectionHeaderProps, VisitExperienceCenterSectionProps } from "../SharedProps";
import { ButtonProps } from "@/app/_components/Button/button-types";

export type ExperienceCenterPageType = {
  metadata: MetaDataType;
  banner: ExperienceCenterBannerType;
  visitExperienceCenter: VisitExperienceCenterSectionProps;
  features: FeaturesOfExperienceCenterType;
}

export type ExperienceCenterBannerType = AdditionalProps & {
  header: SectionHeaderProps;
  backgroundImage: ImageProps;
  buttons: ButtonProps[];
}


export type FeaturesOfExperienceCenterType = AdditionalProps & {
  cards: FeatureCardType[]
}


export type FeatureCardType = {
  image: ImageProps;
  title: string;
  description: string;
}