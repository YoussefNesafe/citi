import { z } from 'zod';

export const contactUsRequestSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  country: z.string(),
  phone: z.string(),
  message: z.string(),
  contactMode: z.string(),
  userOrAgent: z.string(),
  salesOrMarketing: z.string(),
});
