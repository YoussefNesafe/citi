'use client';

import { ContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests";
import { UseFormSetError } from "react-hook-form";

// eslint-disable-next-line @next/next/no-async-client-component
const ContactUsFormAPI = async (formRequest: ContactUsFormRequestProps, setError: UseFormSetError<any>) => {
  
  try {
    const res = await fetch('/api/forms/contact-us', {
      method: 'POST',
      body: JSON.stringify(formRequest),
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
    });
    return res;
  } catch (err: any) {
    setError('root.serverError', {
      type: err.status,
      message: err.message,
    });
    console.error(err);
  }
};

export default ContactUsFormAPI;
