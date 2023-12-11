export const Button = ({ onClick, text, type, className }) => {
  return (
    <button
      type={type}
      className={`border px-5 py-2 rounded text-base font-semibold ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
