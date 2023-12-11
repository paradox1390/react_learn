import * as Yup from "yup";
// matches(regexpLogin, "Start login with @")

const regexpPhone = /^(38)\d{10}$/;
const regexpLogin = /^(@).+$/;
const maxDate = new Date().getFullYear() - 18;
export default [
  Yup.object({
    toggle: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions.",
    ),
    firstName: Yup.string()
      .min(3, "Must be more then 2 characters")
      .required("Field is required"),
    secondName: Yup.string()
      .min(3, "Must be more then 2 characters")
      .required("Field is required"),
    dateBirth: Yup.date(),
    placeBirth: Yup.string(),
  }),
  Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Field is required"),
    phone: Yup.string()
      .matches(regexpPhone, "Phone number is not valid")
      .required("Field is required"),
    social: Yup.array()
      .of(
        Yup.object().shape({
          nameSocial: Yup.string(),
          nickName: Yup.string().matches(regexpLogin, "Start login with @"),
        }),
      )
      .test("social", "Add min 1 profile", (value) => {
        let passTest = false;
        value.forEach((obj) => {
          if (obj.nameSocial?.length > 0 && obj.nickName?.length > 0) {
            passTest = true;
          }
        });
        return passTest;
      }),
  }),
  Yup.object({
    address: Yup.string().min(5, "to short").required("Field is required"),
    city: Yup.string().min(2, "to short").required("Field is required"),
    country: Yup.string().min(5, "to short").required("Field is required"),
    zipCode: Yup.string()
      .min(5, "to short")
      .trim()
      .matches(/^\d+$/, "is not valid")
      .required("Field is required"),
  }),
];
