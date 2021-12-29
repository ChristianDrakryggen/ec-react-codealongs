import Vehicles from "./components/Vehicles";
import Login from "./components/Login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Conditional rendering and stuff</h1>
      <Login />
      <Vehicles />
    </div>
  );
}

export default App;
