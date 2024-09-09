import { transporter } from "../../config/nodemailer";

type SendEmailToType = {
  from: string;
  cc: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}
export const sendEmailTo = async ({from,text,html,subject,cc,to}: SendEmailToType) => {
  return transporter.sendMail({
    from,
    to,
    cc,
    subject,
    html,
    text
  })
}