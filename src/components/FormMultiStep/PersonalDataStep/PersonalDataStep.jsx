import { Field, ErrorMessage, useFormikContext } from "formik";
export const PersonalDataStep = () => {
  const { errors } = useFormikContext();

  return (
    <>
      <h2 className="text-xl font-semibold mb-0.5">Personal data</h2>
      <p className="text-xs font-light mb-8">
        Specify exactly as in your passport
      </p>
      <div className="relative">
        <label htmlFor="firstName" className="text-sm font-normal">
          First name
        </label>
        <Field
          name="firstName"
          type="text"
          className={`block w-full border-b mb-8 px-2.5 py-2.5 outline-0 font-normal text-lg ${
            errors.firstName ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />
        <ErrorMessage
          name="firstName"
          render={(msg) => (
            <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
              {msg}
            </span>
          )}
        />
      </div>
      <div className="relative">
        <label htmlFor="secondName" className="text-sm font-normal">
          Second name
        </label>
        <Field
          name="secondName"
          type="text"
          className={`block w-full border-b mb-8 px-2.5 py-2.5 outline-0 font-normal text-lg ${
            errors.secondName ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />
        <ErrorMessage
          name="secondName"
          render={(msg) => (
            <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
              {msg}
            </span>
          )}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <div className="relative flex flex-col w-full mb-8">
          <label htmlFor="dateBirth" className="text-sm font-normal">
            Date of Birth
          </label>
          <Field
            name="dateBirth"
            type="date"
            className="w-full sm:w-32 border-b outline-0 font-normal text-lg"
          />
          <ErrorMessage
            name="dateBirth"
            render={(msg) => (
              <span className="absolute bottom-[-1.5rem] left-0 text-sm font-normal text-red-500">
                {msg}
              </span>
            )}
          />
        </div>
        <div className="flex flex-col mb-8 grow w-full">
          <label htmlFor="placeBirth" className="text-sm font-normal">
            Place of Birth
          </label>
          <Field
            name="placeBirth"
            type="text"
            className="border-b outline-0 font-normal text-lg"
          />
          <ErrorMessage
            name="placeBirth"
            render={(msg) => (
              <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
                {msg}
              </span>
            )}
          />
        </div>
      </div>
    </>
  );
};
