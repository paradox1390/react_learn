import { useContext } from "react";
import { AuthContex } from "../provider/auth";

export const useAuthContext = () => useContext(AuthContex);
