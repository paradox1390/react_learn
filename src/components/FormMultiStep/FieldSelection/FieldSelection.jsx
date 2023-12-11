import { useEffect } from "react";
import { useFormikContext } from "formik";
import Select from "react-select";

export const FieldSelection = ({
  options,
  field,
  className,
  index,
  setSelectFields,
  selectFields,
}) => {
  const { values, setFieldValue } = useFormikContext();
  useEffect(() => {
    if (values.social[index].nameSocial === "") {
      values.social[index].nameSocial = options[0].value;
      const newFields = [...selectFields];
      newFields.push(options[0].value);
      setSelectFields(newFields);
    }
  }, [index, values, options, setSelectFields, selectFields]);

  const onChange = (value) => {
    field.value.nameSocial = value.value;
    const newFields = [...selectFields];
    newFields[index] = value.value;
    setFieldValue(newFields);
  };

  return (
    <>
      <Select
        classNamePrefix={className}
        className="sm:w-1/2"
        isSearchable={false}
        name={field.name}
        options={options}
        defaultValue={options[0]}
        onChange={onChange}
        formatOptionLabel={(s) => (
          <div className="flex items-center gap-4">
            {s.icon({
              fill: field.value.nickName.length > 0 ? "black" : "gray",
              height: "2em",
              width: "2em",
            })}
            <span className="hidden sm:block">{s.label}</span>
          </div>
        )}
      />
    </>
  );
};
