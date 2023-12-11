import { Field, ErrorMessage, useFormikContext, FieldArray } from "formik";
import icons, { socialIcons } from "../../icons";
import { FieldSelection } from "../FieldSelection/";
import { useState } from "react";
export const ContactsStep = () => {
  const [selectFields, setSelectFields] = useState([]);
  const formik = useFormikContext();
  const { values, errors, initialValues } = formik;
  const filterOptions = (index) => {
    const options = socialIcons.filter((item) => {
      let find = false;
      values.social.forEach((field) => {
        if (field.nameSocial === item.value) {
          find = true;
        }
      });
      if (!find) {
        return item;
      }
    });
    if (values.social[index].nameSocial !== "") {
      options.unshift(
        ...socialIcons.filter(
          (item) => item.value === values.social[index].nameSocial,
        ),
      );
    }
    return options;
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-0.5">Contacts</h2>
      <p className="text-xs font-light mb-8">
        These contacts are used to inform about orders
      </p>
      <label htmlFor="email" className="relative text-sm font-normal">
        Email
      </label>
      <div className="relative">
        <span className="absolute top-2 left-0">
          {icons.Email({
            fill: values.email === initialValues.email ? "gray" : "black",
            height: "2em",
            width: "2em",
          })}
        </span>
        <Field
          name="email"
          type="email"
          className={`w-full border-b mb-8 pl-10 py-2.5 outline-0 font-normal text-lg ${
            errors.email ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />
        <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
          <ErrorMessage name="email" />
        </span>
      </div>
      <label htmlFor="phone" className="text-sm font-normal">
        Phone
      </label>
      <div className="relative">
        <span className="absolute top-2 left-0">
          {icons.Phone({
            fill: values.phone === initialValues.phone ? "gray" : "black",
            height: "2em",
            width: "2em",
          })}
        </span>
        <Field
          name="phone"
          type="text"
          placeholder="380991235577"
          className={`w-full border-b mb-8 pl-10 py-2.5 outline-0 font-normal text-lg ${
            errors.phone ? "border-b-red-500" : "border-b-gray-300"
          }`}
        />

        <ErrorMessage
          name="phone"
          render={(msg) => (
            <span className="absolute bottom-2 left-0 text-sm font-normal text-red-500">
              {msg}
            </span>
          )}
        />
      </div>
      <h2 className="text-xl font-semibold mb-0.5">Social network</h2>
      <p className="text-xs font-light mb-8">
        Indicate the desired communication method
      </p>
      <FieldArray name="social">
        {({ push }) => (
          <>
            <div className="relative">
              {values.social.map((soc, index) => {
                const options = filterOptions(index);
                return (
                  <div key={index} className="flex gap-2 items-end mb-8">
                    <Field
                      className="custom-select"
                      name={`social[${index}]`}
                      options={options}
                      selectFields={selectFields}
                      setSelectFields={setSelectFields}
                      index={index}
                      component={FieldSelection}
                    />
                    <div className="relative grow sm:w-1/2">
                      <Field
                        name={`social.${index}.nickName`}
                        type="text"
                        className={`w-full border-b pl-2.5 py-2.5 outline-0 font-normal text-lg border-b-gray-300`}
                        placeholder="@profile"
                      />
                      <ErrorMessage
                        name={`social.${index}.nickName`}
                        render={(msg) => {
                          return (
                            <span className="absolute bottom-[-1.5rem] left-0 text-sm font-normal text-red-500">
                              {msg}
                            </span>
                          );
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              <ErrorMessage
                name="social"
                render={(msg) => {
                  if (!Array.isArray(msg)) {
                    return (
                      <span className="absolute bottom-0 left-0 text-sm font-normal text-red-500">
                        {msg}
                      </span>
                    );
                  }
                }}
              />
            </div>
            {values.social.length < socialIcons.length ? (
              <button
                type="button"
                onClick={() => push({ nameSocial: "", nickName: "" })}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-medium text-sky-400">+</span>
                <span className="text-lg font-medium text-sky-400">
                  Add More{" "}
                </span>
              </button>
            ) : null}
          </>
        )}
      </FieldArray>
    </>
  );
};
