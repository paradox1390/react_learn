import { Field, ErrorMessage, useFormikContext } from "formik";
export const DeliveryAdrStep = () => {
  const { errors } = useFormikContext();
  return (
    <>
      <h2 className="text-xl font-semibold mb-0.5">Delivery address</h2>
      <p className="text-xs font-light mb-8">Used for shipping orders</p>
      <div className="relative flex flex-col">
        <label htmlFor="address" className="text-sm font-normal">
          Address
        </label>
        <Field
          name="address"
          type="text"
          className={`block border-b mb-8 px-2.5 py-2.5 outline-0 font-normal text-lg ${
            errors.address ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />
        <ErrorMessage
          name="address"
          render={(msg) => {
            return (
              <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
                {msg}
              </span>
            );
          }}
        />
      </div>
      <div className="relative flex flex-col">
        <label htmlFor="city" className="text-sm font-normal">
          City
        </label>
        <Field
          name="city"
          type="text"
          className={`block border-b mb-8 px-2.5 py-2.5 outline-0 font-normal text-lg ${
            errors.city ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />
        <ErrorMessage
          name="city"
          render={(msg) => {
            return (
              <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
                {msg}
              </span>
            );
          }}
        />
      </div>
      <div className="flex gap-4 justify-between box-border w-full">
        <div className="relative flex flex-col box-border max-w-[150px]">
          <label htmlFor="country" className="text-sm font-normal">
            Country
          </label>
          <Field
            name="country"
            type="text"
            className={`border-b mb-8 px-2.5 py-2.5 font-normal text-lg ${
              errors.country ? "border-b-red-500" : "border-b-gray-300"
            }`}
          />
          <ErrorMessage
            name="country"
            render={(msg) => {
              return (
                <span className="absolute bottom-0 left-0 text-sm font-normal text-red-500">
                  {msg}
                </span>
              );
            }}
          />
        </div>
        <div className="relative flex flex-col box-border max-w-[150px]">
          <label htmlFor="zipCode" className="text-sm font-normal">
            Zip code
          </label>
          <Field
            name="zipCode"
            type="text"
            className={`border-b mb-8 px-2.5 py-2.5 font-normal text-lg ${
              errors.zipCode ? "border-b-red-500" : "border-b-gray-300"
            }`}
          />
          <ErrorMessage
            name="zipCode"
            render={(msg) => {
              return (
                <span className="absolute bottom-0 left-0 text-sm font-normal text-red-500">
                  {msg}
                </span>
              );
            }}
          />
        </div>
      </div>
      <label htmlFor="optional" className="text-sm font-normal">
        Optional
      </label>
      <Field
        name="optional"
        type="text"
        className="border-b mb-8 px-2.5 py-2.5 outline-0 font-normal text-lg"
      />
    </>
  );
};
