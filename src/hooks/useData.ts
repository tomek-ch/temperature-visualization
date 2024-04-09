import { useEffect, useState } from "react";
import { Day, getData } from "../utils/data";

export const useData = () => {
  const [data, setData] = useState<null | Day[]>(null);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return data;
};
