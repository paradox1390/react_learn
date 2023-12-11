import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PersonalDataStep } from "./PersonalDataStep";
import { ContactsStep } from "./ContactsStep";
import { DeliveryAdrStep } from "./DeliveryAdrStep";
import { Button } from "../Button/";
import initialValues from "./initialValues";
import validationSchema from "./validationSchema";

export const FormMultiStep = () => {
  const formStepComponents = [
    <PersonalDataStep key={PersonalDataStep} />,
    <ContactsStep key={ContactsStep} />,
    <DeliveryAdrStep key={DeliveryAdrStep} />,
  ];
  const [formStep, setFormStep] = useState(0);

  const currentValidationSchema = validationSchema[formStep];
  const isLastStep = () => {
    return formStep === formStepComponents.length - 1;
  };
  const nextStep = () => {
    setFormStep((s) => s + 1);
  };

  const prevStep = () => {
    setFormStep((s) => s - 1);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 px-1 text-center sm:text-start">
        Profile info
      </h1>
      <p className="text-base font-light mb-8 px-1 text-center sm:text-start">
        Fill in the data for profile. It will take a couple of minutes. You only
        need a passport
      </p>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        enableReinitialize={true}
        validationSchema={currentValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (isLastStep()) {
            alert(JSON.stringify(values));
            resetForm();
            setFormStep(0);
          } else {
            nextStep();
          }
        }}
      >
        <Form>
          {formStep === 0 ? (
            <div className="relative mb-9 px-1 flex justify-center sm:justify-start">
              <label className="mr-4 text-base font-normal">
                <Field name="toggle" type="checkbox" className="mr-2" />I agree
                with
              </label>
              <a href="#" className="text-base font-medium text-blue-600">
                Terms of use
              </a>
              <ErrorMessage
                name="toggle"
                render={(msg) => (
                  <span className="absolute bottom-[-1.2rem] left-[4rem] sm:left-1 left-0 text-sm font-normal text-red-500">
                    {msg}
                  </span>
                )}
              />
            </div>
          ) : null}

          <div className="flex flex-col w-full mb-8 p-8 border-t-2 border-gray-400 sm:border-inherit sm:border sm:rounded-lg">
            {formStepComponents[formStep]}
          </div>

          <div className="flex flex-row-reverse justify-between px-6">
            {formStep > 0 ? (
              <Button
                type="button"
                onClick={prevStep}
                text="← Go Back"
                className={"order-last"}
              />
            ) : null}

            <Button type="submit" text={isLastStep() ? "Send" : "Go Next →"} />
          </div>
        </Form>
      </Formik>
    </>
  );
};
