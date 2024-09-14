import { AlluraPopUpType, ApartmentsCardsType, CountriesListProps, ErrorMessagesProps, LatestNewsProps } from './SharedProps';
import { HomePageProps } from './HomePage';
import { LayoutProps } from "./Layout";
import { NotFoundPageProps } from './NotFoundPage';
import { ContactUsPageProps } from './ContactUsPage';
import { AboutPages } from './AboutPages';
import { ProjectsPages } from './ProjectsPages';
import { Tour360PageType } from './Tour360Page';
import { PrivacyPolicyAndTermsConditionsType } from './PrivacyPolicyAndTermsConditions';

export interface IDictionary {
  layout: LayoutProps;
  notFoundPage: NotFoundPageProps;
  homePage: HomePageProps;
  contactUs: ContactUsPageProps;
  about: AboutPages;
  projects: ProjectsPages;
  tour360: Tour360PageType;
  privacyPolicy: PrivacyPolicyAndTermsConditionsType;
  termsAndConditions: PrivacyPolicyAndTermsConditionsType;
  shared: SharedSectionsProps;
} 

export type SharedSectionsProps = {
  latestNews: LatestNewsProps;
  apartmentsCards: ApartmentsCardsType;
  errorMessages: ErrorMessagesProps;
  countrieslist: CountriesListProps;
  alluraPopUp: AlluraPopUpType;
} 
