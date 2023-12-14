import { forwardRef } from "react";

export const Input = forwardRef(function Input(
  { label, namefield, error, ...props },
  ref,
) {
  return (
    <div className="relative mb-7">
      <label>
        {label}
        <input type="text" ref={ref} className="border block" {...props} />
      </label>
      <p className="absolute bottom-[-25px] left-0 text-sm text-red-500">
        {error[namefield]?.message}
      </p>
    </div>
  );
});
