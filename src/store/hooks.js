import { useContext } from "react";
import Context from "./Context";

export const useStore = () => {
  console.log(Context);
  const [store, dispatch] = useContext(Context);
  console.log([store, dispatch]);

  return [store, dispatch];
};
