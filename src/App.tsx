import { Form } from "./components/Form";
import { KeySelection } from "./components/KeySelection";
import { Mappings } from "./components/Mappings";
import { MonthNames } from "./components/MonthNames";
import { useData } from "./hooks/useData";
import { useVisualization } from "./hooks/useVisualization";

export const App = () => {
  const data = useData();
  const {
    addMapping,
    removeMapping,
    colorMappings,
    setKey,
    colorFromDay,
    updateMappingColor,
  } = useVisualization();

  if (!data) return "loading...";

  return (
    <div style={{ maxWidth: 2000, margin: "auto" }}>
      <Form onSubmit={addMapping} />
      <Mappings
        items={colorMappings}
        onRemove={removeMapping}
        onColorChange={updateMappingColor}
      />
      <KeySelection onChange={setKey} />
      <div style={{ display: "flex", height: 100 }}>
        {data.map((item, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: colorFromDay(item), width: 5 }}
          />
        ))}
      </div>
      <MonthNames />
    </div>
  );
};
