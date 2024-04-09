import { MappingKey } from "../hooks/useVisualization";

type KeySelectionProps = {
  onChange(value: MappingKey): void;
};

export const KeySelection = ({ onChange }: KeySelectionProps) => {
  return (
    <fieldset
      onChange={(e) => {
        if (e.target instanceof HTMLInputElement) {
          onChange(e.target.value as MappingKey);
        }
      }}
    >
      <legend>Dopasuj kolory na podstawie:</legend>
      <label>
        <input type="radio" name="key" value="avg" defaultChecked />
        Średniej temperatury
      </label>
      <label>
        <input type="radio" name="key" value="max" />
        Maksymalnej temperatury
      </label>
      <label>
        <input type="radio" name="key" value="min" />
        Minimalnej temperatury
      </label>
      <label>
        <input type="radio" name="key" value="maja" />
        Po majowemu
      </label>
    </fieldset>
  );
};
