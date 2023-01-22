import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import { Domitory, YangJinjae, YangSungjae, MainBuilding } from "./pages/Dormitory.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/본관" element={<Domitory place={"본관"} />} />
        <Route path="/양성재" element={<div>양성재</div>} />
        <Route path="/양진재" element={<Domitory place={"양진재"} />} />
        <Route path="/별빛식당" element={<div>내용</div>} />
        <Route path="/은하수식당" element={<div>내용</div>} />
        <Route path="/한빛식당" element={<div>내용</div>} />
        <Route path="*" element={<div>404 꺼지셈</div>} />
      </Routes>
    </div>
  );
}

export default App;
