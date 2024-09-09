import { ContactUsEmailTemplate } from './../../../emails/contactUsTemplate';
import { ContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests"

const CONTACT_MESSAGE_FIELDS = {
  fullName: "Name",
  email: "Email",
  country: "Country",
  ContactMode: "Contact mode",
  phone: "Phone",
  message: "Message",
  userOrAgent:"",
salesOrMarketing:"",
}


type props = {
  data : ContactUsFormRequestProps;
  type: 'ContactUs' | 'Career'
}
const templateMap =  {
  ContactUs :  (data : ContactUsFormRequestProps) => ContactUsEmailTemplate(data),
  Career : (data : ContactUsFormRequestProps) => ContactUsEmailTemplate(data)
}

export const generateEmailContent = ({data, type}: props) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) =>  str+= `${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}: ${value} \n \n`
  , "" )
  return {
    text: stringData,
    html: templateMap[type as keyof typeof templateMap](data)
  }
}