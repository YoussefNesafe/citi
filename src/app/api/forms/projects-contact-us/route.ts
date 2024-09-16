import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { ProjectsContactUsFormRequestProps } from '@/models/IDictionary/FormsRequests';
import { mailOptions } from '../../../../../config/nodemailer';
import { sendEmailTo } from '@/services/sendEmail';
import { generateEmailContent } from '@/app/utils/generateEmailContent';
import { projectsContactUsFormSchema } from '@/models/zod/projectsContactUsFormSchema';
import { FormType } from '@/models/IDictionary/SharedProps';


export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ProjectsContactUsFormRequestProps;

    const reqBody: ProjectsContactUsFormRequestProps = {
      ...body,
      // @ts-ignore
      country: body.country?.[0]?.label, 
      contactMode: body?.contactMode || 'Phone',
    };

    const validatedBody = projectsContactUsFormSchema.parse(reqBody);
    const { text, html } = generateEmailContent({ data: validatedBody, type: FormType.projectsPagesContacts });

    const response = await sendEmailTo({
      ...mailOptions,
      cc: process.env.CC_FATIMA_EMAIL || '',
      to: process.env.MARKETING_EMAIL || '',
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
