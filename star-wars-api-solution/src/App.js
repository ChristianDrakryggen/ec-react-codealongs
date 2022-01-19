import Films from "./components/Films";

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Star Wars</h1>
      <Films />
    </div>
  );
}

export default App;
