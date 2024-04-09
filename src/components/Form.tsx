import { FormEvent, useState } from "react";
import { MappingData } from "../hooks/useVisualization";

type FormProps = {
  onSubmit(data: MappingData): void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const [max, setMax] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const maxValue = Number(max);
    if (isNaN(maxValue)) alert("Podaj liczbę");
    else {
      setMax("");
      onSubmit({
        max: maxValue,
        color,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Maksymalna temperatura
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          name="max"
        />
      </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button>Dodaj</button>
    </form>
  );
};
