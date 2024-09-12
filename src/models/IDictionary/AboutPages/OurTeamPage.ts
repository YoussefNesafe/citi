import { ImageProps } from "next/image";
import { AdditionalProps, ManagerCardType, MetaDataType, SectionHeaderProps } from "../SharedProps"

export type OurTeamPageType = {
  metadata: MetaDataType;
  header: SectionHeaderProps;
  CEOMessage: CEOMessageType;
  managers:ManagerCardType[] 
  teamMembers: TeamMembersType;
}


export type CEOMessageType = AdditionalProps &{
  image: ImageProps;
  title: string;
  description: string;
  ceoDetails: {
    title: string;
    name: ImageProps;
  }
}




export type TeamMembersType = {
  title: string;
  cards: TeamMemberCardType[];
}
export type TeamMemberCardType ={
  image: ImageProps;
  name: string;
}