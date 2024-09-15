import { ImageProps } from "next/image";
import { AdditionalProps, ProjectBriefSectionType, SectionHeaderProps } from "../SharedProps";
import { ButtonProps } from "@/app/_components/Button/button-types";

export type AlluraPageType = {
  banner: AlluraBannerType;
  overView: OverViewType;
  projectBrief: ProjectBriefSectionType;
};


type BannerCard = {
  title: string;
  description: string;
};
export type AlluraBannerType = AdditionalProps & {
    backgroundImage: ImageProps;
    slugan: string;
    logo: ImageProps;
    button: ButtonProps;
    locationAndCompletion: BannerCard[];
    appartments: BannerCard[];
  
}

export type OverViewType = AdditionalProps & {
  header: SectionHeaderProps;
  buildingDetailsCards:{
    image: ImageProps;
    content: {
      title: string;
      description: string;
      button: ButtonProps;
    }
  }[]
}