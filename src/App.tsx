import { useData } from "./hooks/useData";

export const App = () => {
  const data = useData();

  if (!data) return "loading...";

  return JSON.stringify(data);
};
