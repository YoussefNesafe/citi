import { ApartmentsCardsType, CountriesListProps, ErrorMessagesProps, LatestNewsProps } from './SharedProps';
import { HomePageProps } from './HomePage';
import { LayoutProps } from "./Layout";
import { NotFoundPageProps } from './NotFoundPage';
import { ContactUsPageProps } from './ContactUsPage';
import { AboutPages } from './AboutPages';
import { ProjectsPages } from './ProjectsPages';
import { Tour360PageType } from './Tour360Page';

export interface IDictionary {
  layout: LayoutProps;
  notFoundPage: NotFoundPageProps;
  homePage: HomePageProps;
  contactUs: ContactUsPageProps;
  about: AboutPages;
  projects: ProjectsPages;
  tour360: Tour360PageType;
  shared: SharedSectionsProps;
} 

export type SharedSectionsProps = {
  latestNews: LatestNewsProps;
  apartmentsCards: ApartmentsCardsType;
  errorMessages: ErrorMessagesProps;
  countrieslist: CountriesListProps;
} 
