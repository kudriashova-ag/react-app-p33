import React from "react";

const WeatherToday = () => {
  const weather = {
    city: "Київ",
    temp: 5,
    feelsLike: 2,
    condition: "Сонячно",
  };

  const showTemplate = false;
  let template = "";
  if (weather.condition === "Сонячно") {
    template = (
      <>
        Погода <b>бігати</b>
      </>
    );
  } else {
    template = (
      <>
        Погода <b>сидіти дома</b>
      </>
    );
  }

  return (
    <div>
      <h2>Погода на сьогодні</h2>
      <div>Місто: {weather.city}</div>
      <div>
        TEMP: {weather.temp}, Feells Like: {weather.feelsLike}
      </div>
      <div>
        {weather.temp > 0 ? (
          <>
            <b>Normal</b> temp
          </>
        ) : (
          "Cool"
        )}
      </div>

      {showTemplate && <div>{template}</div>}
    </div>
  );
};

export default WeatherToday;