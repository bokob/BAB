import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Card, Button, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {Logo, Header, TodayMeal, Clock} from './component.js';
import Main from './pages/main.js';
import {Domitory, YangJinjae, YangSungjae, MainBuilding} from './pages/dormitory.js';

function App() {

  return (
    <div className="App">
      <Logo/>
      <Routes>
        <Route path="/" element={<div><Main/></div>} />
        <Route path="/home" element ={<div><Main/></div>} />
        <Route path="/본관" element ={<div><Domitory/></div>} />
        <Route path="/양성재" element ={<div>양성재</div>} />
        <Route path="/양진재" element ={<div><Domitory/></div>} />
        <Route path="/별빛식당" element ={<div>내용</div>} />
        <Route path="/은하수식당" element ={<div>내용</div>} />
        <Route path="/한빛식당" element ={<div>내용</div>} />
        <Route path="*" element={<div>404 다.</div>}/>
      </Routes>
    </div>
  );
}

export default App;
