const monthNames = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

export const MonthNames = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
      {monthNames.map((item, idx) => (
        <div
          style={{
            textAlign: "center",
            borderRight: idx === 11 ? undefined : "1px solid black",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
