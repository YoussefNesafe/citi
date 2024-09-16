
export type SafeNumber = number | `${number}`;

export type ContactUsFormRequestProps = {
  fullName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
  contactMode: string;
  userOrAgent: string;
  salesOrMarketing: string;
  leadSource: string;
}
export type ProjectsContactUsFormRequestProps = {
  fullName: string;
  email: string;
  country: string;
  phone: string;
  contactMode: string;
  leadSource: string;
  bedrooms: string;
  budget: string;
}
