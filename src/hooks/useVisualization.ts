import { useState } from "react";
import { getId } from "../utils/getId";
import { Day } from "../utils/data";

export type ColorMapping = {
  id: string;
  max: number;
  color: string;
};

export type MappingKey = keyof Day;
export type MappingData = Omit<ColorMapping, "id">;

export const useVisualization = () => {
  const [key, setKey] = useState<keyof Day>("avg");
  const [colorMappings, setColorMappings] = useState<ColorMapping[]>([
    { id: "-1", max: 0, color: "#2150A3" },
    { id: "-2", max: 5, color: "#4F79CD" },
    { id: "-3", max: 10, color: "#734BA4" },
    { id: "-4", max: 15, color: "#BBDFF9" },
    { id: "-5", max: 20, color: "#C9FFC6" },
    { id: "-6", max: 25, color: "#F6D55C" },
    { id: "-7", max: 25.5, color: "#EC9322" },
    { id: "-8", max: 26, color: "#DB1E62" },
    { id: "-9", max: 9999, color: "#B30131" },
  ]);

  const addMapping = (data: MappingData) => {
    setColorMappings((prev) =>
      [...prev, { id: getId(), ...data }].sort((a, b) => a.max - b.max)
    );
  };

  const removeMapping = (id: string) => {
    setColorMappings((prev) => prev.filter((item) => item.id !== id));
  };

  const updateMappingColor = (id: string, newColor: string) => {
    setColorMappings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, color: newColor } : item))
    );
  };

  const colorFromDay = (day: Day) =>
    colorMappings.find((item) => day[key] < item.max)?.color;

  return {
    colorMappings,
    addMapping,
    removeMapping,
    colorFromDay,
    setKey,
    updateMappingColor,
  };
};
