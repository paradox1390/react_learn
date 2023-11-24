import { useContext } from "react";
import { IdUserContext } from "../provider/idUser";

export const useIdUserContext = () => useContext(IdUserContext);
