import { AlluraPageType } from "./AlluraPage";
import { AvelineInnerPagesType, AvelinePageType } from "./AvelinePage"

export type ProjectsPages = {
  aveline: AvelinePageType;
  studioApartment: AvelineInnerPagesType;
  oneBedroomApartment: AvelineInnerPagesType;
  twoBedroomApartment: AvelineInnerPagesType;
  threeBedroomApartment: AvelineInnerPagesType;
  allura: AlluraPageType;
}