const getFormatData = () => {
  const day = new Date().toLocaleString("en-US", { day: "2-digit" });
  const month = new Date().toLocaleString("en-US", { month: "2-digit" });
  const year = new Date().getFullYear();
  return `${year}-${month}-${day}`;
};

export default {
  toggle: false,
  firstName: "",
  secondName: "",
  dateBirth: getFormatData(),
  placeBirth: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  zipCode: "",
  optional: "",
  social: [{ nameSocial: "", nickName: "" }],
};
