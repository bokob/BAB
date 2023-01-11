import logo from "./logo.svg";
import "./App.css";
import {
  Nav,
  Navbar,
  Container,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { Header, TodayMeal, Clock, Today, MealsPerWeek } from "./component.js";
import Main from "./pages/main.js";
import {
  Domitory,
  YangJinjae,
  YangSungjae,
  MainBuilding,
} from "./pages/dormitory.js";

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
