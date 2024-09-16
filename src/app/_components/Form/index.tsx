"use client"
import { SharedSectionsProps } from "@/models/IDictionary";
import { FormProps, FormType } from "@/models/IDictionary/SharedProps";
import ContactUsFormAPI from "@/services/contactUsForm";
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Input from "../Input";
import Button from "../Button";
import { sanitize } from "isomorphic-dompurify";
import { cn } from "@/lib/utils";
import Spinner from "../Spinner";
import { getValidationFunctions } from "@/app/utils/getValidationFunctions";
import { useRouter } from "next/navigation";
import ProjectsContactUsFormAPI from "@/services/projectsContactUsForm";
interface Inputs {
  [key: string]: object | any;
}

const formServiceMap: { [type in FormType]: any } = {
  [FormType.contactUs]: ContactUsFormAPI,
  [FormType.projectsPagesContacts]: ProjectsContactUsFormAPI
};

type Props = FormProps & Pick<SharedSectionsProps, 'errorMessages' | 'countrieslist'>
const Form = ({ leadSource, formType, disclaimer, errorMessages, fields, submit, countrieslist, className, ...props }: Props) => {
  const methods = useForm<Inputs>({ criteriaMode: 'all', mode: 'onChange' });
  const router = useRouter()
  const {
    handleSubmit,
    setError,
    formState: { errors, touchedFields, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (formType && data) {
      const requestData = { ...data, leadSource }
      const formAPIRes = await formServiceMap[formType](requestData, setError)
      if (!formAPIRes || !formAPIRes.ok) return;
      router.push('/thank-you')
    }
  };


  return (
    <FormProvider {...methods}>
      <form
        {...props}
        className={cn("flex w-full flex-wrap items-start justify-between content-baseline", className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((fieldObj) => {
          const fieldName = fieldObj.key as string;
          if (fieldObj?.validation?.validate)
            fieldObj.validation.validate = getValidationFunctions(fieldObj.validation.validate as any, errorMessages);
          return (
            <Input
              {...fieldObj}
              key={fieldName}
              name={fieldName}
              errors={errors[fieldName]}
              touched={touchedFields[fieldName]}
              countrieslist={countrieslist}
            />
          );
        })}
        {disclaimer ? (
          <p
            id="disclaimer"
            className={
              'text-left rtl:text-right text-[2.796vw] leading-[4.33vw] text-gray-450 tablet:text-[1.5vw] tablet:leading-[2vw] desktop:text-[0.8vw] desktop:leading-[1.04vw] [&>a]:font-bold [&>a]:text-dark'
            }
            dangerouslySetInnerHTML={{ __html: sanitize(disclaimer, { ALLOWED_ATTR: ['target', 'href'] }) }}
          />
        ) : (
          <></>
        )}
        <div className={'mt-[3.2vw] w-full  tablet:mt-[1.5vw] desktop:mt-[1.04vw]'}>
          <Button
            as="button"
            theme='primary'
            title={isSubmitting ? "" : submit}
            disabled={isSubmitting || !isValid}
            size={'md'}
            className={cn(
              'w-full',
              (isSubmitting || !isValid) && 'cursor-not-allowed '
            )}
            type="submit"
          >
            {isSubmitting && <Spinner />}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default Form