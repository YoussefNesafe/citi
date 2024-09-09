import { ExperienceCenterPageType } from './ExperienceCenter';
import { CitiDeveloperPageType } from "./CitiDeveloper"
import { NewsAndBlogsPagesType } from "./NewsAndBlogsPages";
import { OurTeamPageType } from "./OurTeamPage";
import { PortfolioPageType } from "./Portfolio";

export type AboutPages = {
  citiDeveloper: CitiDeveloperPageType;
  portfolio: PortfolioPageType;
  news: NewsAndBlogsPagesType;
  blogs: NewsAndBlogsPagesType;
  ourTeam: OurTeamPageType;
  experienceCenter: ExperienceCenterPageType;
}