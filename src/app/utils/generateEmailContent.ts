import { FormType } from '@/models/IDictionary/SharedProps';
import { ProjectsContactUsEmailTemplate } from '../../../emails/projectsContactUsTemplate';
import { ContactUsEmailTemplate } from './../../../emails/contactUsTemplate';
import { ContactUsFormRequestProps, ProjectsContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests"

const CONTACT_MESSAGE_FIELDS = {
  fullName: "Name",
  email: "Email",
  country: "Country",
  ContactMode: "Contact mode",
  phone: "Phone",
  message: "Message",
  userOrAgent:"User Or Agent",
  salesOrMarketing:"Sales Or Marketing",
  bedrooms: 'Number of bedrooms',
  budget: 'Budget',
}


type props = {
  data : ContactUsFormRequestProps | ProjectsContactUsFormRequestProps;
  type : FormType
}
const templateMap =  {
  [FormType.contactUs] :  (data : ContactUsFormRequestProps) => ContactUsEmailTemplate(data),
  [FormType.projectsPagesContacts] : (data : ProjectsContactUsFormRequestProps) => ProjectsContactUsEmailTemplate(data)
}

export const generateEmailContent = ({data, type}: props) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) =>  str+= `${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}: ${value} \n \n`
  , "" )
  return {
    text: stringData,
    html: templateMap[type](data as any)
  }
}