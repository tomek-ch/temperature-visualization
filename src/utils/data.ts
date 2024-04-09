const MAX_TEMP_KEY = 5;
const MIN_TEMP_KEY = 7;
const AVG_TEMP_KEY = 9;

export type Day = {
  max: number;
  min: number;
  avg: number;
};

const formatData = (input: string): Day[] =>
  input.split("\n").map((line) => {
    const columns = line.split(",");
    return {
      max: parseFloat(columns[MAX_TEMP_KEY]),
      min: parseFloat(columns[MIN_TEMP_KEY]),
      avg: parseFloat(columns[AVG_TEMP_KEY]),
    };
  });

export const getData = () =>
  fetch("/data.csv")
    .then((res) => res.text())
    .then(formatData);
