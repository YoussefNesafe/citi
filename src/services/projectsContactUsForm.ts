'use client';

import {  ProjectsContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests";
import { UseFormSetError } from "react-hook-form";

// eslint-disable-next-line @next/next/no-async-client-component
const ProjectsContactUsFormAPI = async (formRequest: ProjectsContactUsFormRequestProps, setError: UseFormSetError<any>) => {
  
  try {
    const res = await fetch('/api/forms/projects-contact-us', {
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

export default ProjectsContactUsFormAPI;
