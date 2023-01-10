
import { useContext } from "react";
import HistoryContext from "../context/HistoryProvider";

const useHistory = () => useContext(HistoryContext);

export default useHistory;