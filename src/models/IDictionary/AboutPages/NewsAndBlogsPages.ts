import { ButtonProps } from "@/app/_components/Button/button-types";
import { MetaDataType, SectionHeaderProps } from "../SharedProps"
import { CardProps } from "@/app/_components/Card/types";

export type NewsAndBlogsPagesType = {
  metadata: MetaDataType;
  header: SectionHeaderProps;
  button: ButtonProps;
 cards: CardProps[];
}
