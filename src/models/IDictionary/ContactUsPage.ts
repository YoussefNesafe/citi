import { InputProps } from "@/app/_components/Input";
import { AdditionalProps } from "./SharedProps";



export type ContactUsPageProps = {
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