import { ImageProps } from "next/image";
import { AdditionalProps, BannerSectionType, SectionHeaderProps, SwiperSectionType } from "../SharedProps"
import { ButtonProps } from "@/app/_components/Button/button-types";
import { IMAGES_MAP_TYPE } from "@/constants/aveline_images_maps";

export type AvelinePageType = {
  banner: BannerSectionType;
  avelineJvc: AvelineJvcType;
  projectInfo: ProjectInfoType;
  discoverCommunity: DiscoverCommunityType;
  amenities: SwiperSectionType;
  exterior: SwiperSectionType;
  lobby: SwiperSectionType;
}

export type AvelineInnerPagesType = {
  banner: BannerSectionType;
  header: SectionHeaderProps;
  swipers?: {
    title: string;
    arrayMapName: IMAGES_MAP_TYPE;
  }[] 
}

export type AvelineJvcType = AdditionalProps & {
  image: ImageProps;
  title: string;
  article: {
    title: string;
    description: string
  }
}

export type ProjectInfoBoxType = {title: string; description: string}

export type ProjectInfoType = AdditionalProps & {
  data: ProjectInfoBoxType[];
  bookText: string;
  button: ButtonProps
}

export type DiscoverCommunityType = AdditionalProps & {
  image: ImageProps;
  title: string;
  description: string;
  button: ButtonProps;
}

