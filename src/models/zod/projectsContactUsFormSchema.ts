import { z } from 'zod';

export const projectsContactUsFormSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  country: z.string(),
  phone: z.string(),
  contactMode: z.string(),
  leadSource: z.string(),
  bedrooms: z.string(),
  budget: z.string()
});
