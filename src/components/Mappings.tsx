import { ColorMapping } from "../hooks/useVisualization";

type MappingsProps = {
  items: ColorMapping[];
  onRemove(id: string): void;
  onColorChange(id: string, newColor: string): void;
};

export const Mappings = ({ items, onRemove, onColorChange }: MappingsProps) => {
  return (
    <ul>
      {items.map(({ max, id, color }) => (
        <li key={id}>
          <div>{max}</div>
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(id, e.target.value)}
          />
          <button onClick={() => onRemove(id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};
