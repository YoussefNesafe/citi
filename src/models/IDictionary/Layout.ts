import { ButtonProps } from "@/app/_components/Button/button-types";
import { ImageProps } from "next/image";

export type InternetConnectionProps = {
  title: string;
  description: string;
}

// Language Menu Types
type LangItem = {
  label: string;
  value: string;
  href: string;
}


// Pages Links Types

export type PageLinkItemProps = {
  title:  string;
  href: string;
  pageKey: string;
}
type PageLinkProps =  PageLinkItemProps & {subLinks?: PageLinkItemProps[];}

// Main Layout Types (it should match with the en.json file)
export type LayoutProps = {
  internetConnection : InternetConnectionProps;
  navbar: Omit<NavbarProps, 'links'>
  pagesLinks:PageLinkProps[];
  footer: Omit<FooterProps, 'links'>;
}

// Nabar Type
export type NavbarProps = {
  languages: LangItem[];
  links: PageLinkProps[];
  contactUsButton: ButtonProps;
}


// Footer Type
export type FooterProps = {
  locationCard: LocationCardProps;
  socialMediaLinks: SocialMediaLinkProps[];
  whereToGoNextCards: WhereToGoNextCardProps[];
  links: PageLinkProps[];
  copyRights: string;
  contactUsButton: ButtonProps;
}

export type LocationCardProps = {
  title: string;
  description: string;
  locationUrl: string;
  button: ButtonProps;
}

export type SocialMediaLinkProps = {href: string; icon: string;}

export type WhereToGoNextCardProps = {
  button: ButtonProps;
  image: ImageProps;
}
