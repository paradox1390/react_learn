import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Select from "react-select";

import { Input } from "./components/Input";

const schema = yup.object({
  firstName: yup.string().required("Field is required"),
  secondName: yup.string().required("Field is required"),
  select: yup.object(),
  profile: yup.string().when("select", {
    is: (select) => select?.value?.length > 0,
    then: (shema) => shema.min(4).required(),
  }),
});

const options = [
  { value: "Twitter", label: "Twitter" },
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "LinkedIn", label: "LinkedIn" },
];

function App() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectWatcher = watch("select");

  const isSelect = () => {
    return selectWatcher?.value?.length > 0;
  };
  const onSubmit = (data) => (alert(JSON.stringify(data)), reset());

  return (
    <>
      <div className="max-w-md px-4 py-2 mx-auto mt-3 border rounded-md shadow-md">
        <h1 className="text-center">React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"First name:"}
            namefield="firstName"
            {...register("firstName")}
            error={errors}
          />
          <Input
            label={"Second name:"}
            namefield="secondName"
            {...register("secondName")}
            error={errors}
          />
          <Controller
            name="select"
            control={control}
            render={({ field }) => (
              <label>
                Select your preferred social network:
                <Select {...field} options={options} className="mb-7" />
              </label>
            )}
          />
          {isSelect() ? (
            <Input
              label={"@profile:"}
              namefield="profile"
              {...register("profile")}
              error={errors}
            />
          ) : null}
          <input
            type="submit"
            className="border px-4 py-2 rounded-md shadow-md"
          />
        </form>
      </div>
    </>
  );
}

export default App;
