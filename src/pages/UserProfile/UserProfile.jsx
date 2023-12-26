import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

import {
  useUserSelector,
  fetchUserProfile,
} from "@store/slice/userProfileSlice";

export const UserProfile = () => {
  const { id } = useParams();
  const { isLoading, user, error } = useUserSelector();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUserProfile(id));
  }, [dispatch, id]);

  const onClick = () => {
    history.goBack();
  };

  return (
    <>
      {isLoading && (
        <span className="flex items-center justify-center min-h-screen">
          Loading...
        </span>
      )}
      {user && (
        <div>
          <Link to="/" className="mr-2 border-2 p-2 bg-slate-200">
            Go to main page
          </Link>
          <button onClick={onClick} className="mr-2 border-2 p-2 bg-slate-400">
            Go Back
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <img
              src={user.image}
              alt=""
              className="border-2 rounded-md bg-white"
            />
            <div>
              <h2 className="text-lg font-bold my-2">General information</h2>
              <ul>
                <li className="text-base font-normal">
                  Full name:
                  <span className="font-medium italic text-gray-600">{` ${user.firstName} ${user.lastName}`}</span>
                </li>
                <li className="text-base font-normal">
                  Username:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.username}`}</span>
                </li>
              </ul>
              <h2 className="text-lg font-bold my-2">Biology information</h2>
              <ul>
                <li className="text-base font-normal">
                  Gender:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.gender}`}</span>
                </li>
                <li className="text-base font-normal">
                  Age:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.age}`}</span>
                </li>
                <li className="text-base font-normal">
                  Height:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.height}`}</span>
                </li>
                <li className="text-base font-normal">
                  Weight:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.weight}`}</span>
                </li>

                <li className="text-base font-normal">
                  Blood group:{" "}
                  <span className="font-medium italic text-gray-600">{`${user.bloodGroup}`}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {error && (
        <span className="flex items-center justify-center min-h-screen">
          Oops we have errors... my bad
        </span>
      )}
    </>
  );
};
