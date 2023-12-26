import { Link } from "react-router-dom";

export const UserListItem = ({ user }) => {
  const {
    image,
    id,
    firstName,
    lastName,
    company: { title },
  } = user;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="flex flex-col items-center bg-white rounded-md gap-5">
      <img
        src={image}
        alt={fullName}
        className="mt-5 rounded-full h-36 w-auto"
      />
      <div className="flex flex-col gap-1 items-center">
        <span className="text-base font-medium text-black">{fullName}</span>
        <span className="text-sm font-normal text-gray-500">{title}</span>
        <Link
          to={`/profile/${id}`}
          className="mt-2 bg-emerald-50 border border-green-600 px-3 py-1 rounded-xl text-sm"
        >
          View profile
        </Link>
      </div>
      <div className="flex w-full h-10">
        <a
          href="mailto:"
          className="w-1/2 flex items-center justify-center border-t border-r text-base font-normal text-gray-600"
        >
          Send email
        </a>
        <a
          href="tel:"
          className="w-1/2 flex items-center justify-center border-t text-base font-normal text-gray-600"
        >
          Call
        </a>
      </div>
    </div>
  );
};
