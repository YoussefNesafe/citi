import { NextRequest, NextResponse } from 'next/server'; 
import { ZodError } from 'zod';
import { ContactUsFormRequestProps } from '@/models/IDictionary/FormsRequests';
import { contactUsRequestSchema } from '@/models/zod/contactUsFormSchema';
import { mailOptions } from '../../../../../config/nodemailer';
import { sendEmailTo } from '@/services/sendEmail';
import { generateEmailContent } from '@/app/utils/generateEmailContent';
import { FormType } from '@/models/IDictionary/SharedProps';

type MailToParams = { user: string; type: string; subject?: boolean };

const getMailTo = ({ user, type }: MailToParams): string => {
  const lowerUser = user.toLowerCase();
  const lowerType = type.toLowerCase();
  if (lowerType === 'marketing') return process.env.MARKETING_EMAIL || '';
  if (lowerUser === 'client' && lowerType === 'sales') return process.env.SALES_EMAIL || '';
  if (lowerUser === 'agent' && lowerType === 'sales') return process.env.SALES_OPERATION_EMAIL || '';
  return '';
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactUsFormRequestProps;

    const reqBody: ContactUsFormRequestProps = {
      ...body,
      // @ts-ignore
      country: body.country?.[0]?.label,
      // @ts-ignore
      userOrAgent: body.userOrAgent?.[0]?.value,
      // @ts-ignore
      salesOrMarketing: body.salesOrMarketing?.[0]?.value,
      contactMode: body?.contactMode || 'Phone',
    };

    const validatedBody = contactUsRequestSchema.parse(reqBody);
    const { text, html } = generateEmailContent({ data: validatedBody, type: FormType.contactUs });

    const ccEmail =
    //@ts-ignore
      body.salesOrMarketing?.[0]?.value.toLowerCase() === 'marketing'
        ? process.env.CC_FATIMA_EMAIL
        : process.env.CC_SARAH_EMAIL;

    Object.assign(mailOptions, { cc: ccEmail });

    const response = await sendEmailTo({
      ...mailOptions,
      // @ts-ignore
      to: getMailTo({ user: body.userOrAgent?.[0]?.value, type: body.salesOrMarketing?.[0]?.value,}),
      subject: body.leadSource,
      text,
      html,
    });

    return NextResponse.json({ accepted: response.accepted });
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof ZodError) {
      const validationErrors = err.errors.map((error) => error.message);
      return new Response(JSON.stringify({ message: validationErrors }), { status: 400 });
    }

    return NextResponse.json({ message: (err as Error).message, success: false });
  }
}
