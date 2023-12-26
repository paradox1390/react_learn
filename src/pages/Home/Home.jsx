import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserListItem } from "@components/UserListItem";

import {
  fetchUsersList,
  useUserListSelector,
} from "@store/slice/userListSlice";



export const Home = () => {
  const { isLoading, userList, error } = useUserListSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  const mappingUserList = (user) => {
    return <UserListItem key={user.id} user={user} />;
  };

  return (
    <>
      {isLoading && (
        <span className="flex items-center justify-center min-h-screen">
          Loading...
        </span>
      )}

      {userList && (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userList.map(mappingUserList)}
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
