import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/views/About";
import Home from "./components/views/Home";
import Layout from "./components/views/Layout";
import NoView from "./components/views/NoView";
import DemoMemo from "./components/views/DemoMemo";
import DemoMemoHook from "./components/views/DemoMemoHook";
import DemoCbHook from "./components/views/DemoCbHook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="demomemo" element={<DemoMemo />} />
          <Route path="demomemohook" element={<DemoMemoHook />} />
          <Route path="democbhook" element={<DemoCbHook />} />
          <Route path="*" element={<NoView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
