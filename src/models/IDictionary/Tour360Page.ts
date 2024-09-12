import {  BannerSectionType, MetaDataType, PhotoCardType } from './SharedProps';
export type Tour360PageType = {
  metadata: MetaDataType;
  banner: BannerSectionType;
  tabs: TabsSectionType;
}


export type TabsSectionType = TabType[];

export type TabType= {
  tabKey: string;
  title: string;
  cards?: PhotoCardType[];
}

