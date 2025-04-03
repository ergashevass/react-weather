import React from "react";

function DayButton({ day, selectedday, setSelectedday, index }) {
  const weekDay = new Date(day.date).toLocaleDateString("uz-UZ", {
    weekday: "short",
  });
  return (
    <div className="forecast-days">
      <p
        className={index === selectedday ? "ketmon" : ""}
        onClick={() => {
          setSelectedday(index);
        }}
      >
        {weekDay}
      </p>
    </div>
  );
}

export default DayButton;
