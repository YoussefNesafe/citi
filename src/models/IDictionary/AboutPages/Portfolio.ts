import { ButtonProps } from "@/app/_components/Button/button-types";
import { ImageProps } from "next/image";
import { AdditionalProps, MetaDataType } from "../SharedProps";

export type PortfolioPageType = {
  metadata: MetaDataType;
  banner: BannerPortfolioType;
};

export type BannerPortfolioType = AdditionalProps & {
  title: string;
  subtitle: string;
  description: string;
  buttons: ButtonProps[];
  backgroundImages: {
    firstRow: ImageProps[];
    secondRow: ImageProps[];
    thirdRow: ImageProps[];
  }
}

export type HighlightedImageType =ImageProps & {projectName: string, country: string}

export type HighlightedImagesType = AdditionalProps & {
  highlightedImages: HighlightedImageType[];
}

