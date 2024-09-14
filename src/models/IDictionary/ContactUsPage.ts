import { AdditionalProps, MetaDataType } from "./SharedProps";



export type ContactUsPageProps = {
  metadata: MetaDataType;
  form: ContactUsFormProps;
}

type ContactOption = {
  icon: string;
  list: string[];
}


export type ContactUsFormProps = AdditionalProps & {
  title: string;
  description: string;
  contactOptions: ContactOption[];
  disclaimer: string;
  submit: string;
  fields: {[key: string]: object | any}[];
}