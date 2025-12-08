import { Outlet } from "react-router";
import "./App.css"
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default App;