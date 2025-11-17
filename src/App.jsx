import "./App.css"
import Contacts from "./components/contacts/Contacts";
import WeatherToday from "./components/weather/WeatherToday";

function App() {
  const title = "Welcome!"

  return (
    <>
      <h1 className="title">{title} { new Date().getFullYear() }</h1>
      <p style={{ fontFamily: "Arial", fontSize: "1.5em" }}>Some text</p>
      <hr />
      <WeatherToday />
      <Contacts />
    </>
  );
}

export default App;