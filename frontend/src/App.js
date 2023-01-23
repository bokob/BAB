import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import Header from "./components/Header.jsx";
import { Domitory, YangJinjae, YangSungjae, MainBuilding } from "./pages/Dormitory.js";
import Test from "./pages/Cafeteria.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/본관" element={<MainBuilding />} />
        <Route path="/양성재" element={<YangSungjae />} />
        <Route path="/양진재" element={<YangJinjae />} />
        <Route path="/별빛식당" element={<div>내용</div>} />
        <Route path="/은하수식당" element={<div>내용</div>} />
        <Route
          path="/한빛식당"
          element={
            <div>
              <Test />
            </div>
          }
        />
        <Route path="*" element={<div>잘못된 접근 돌아가셈</div>} />
      </Routes>
    </div>
  );
}

export default App;
