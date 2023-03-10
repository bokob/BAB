import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import Header from "./components/Header.jsx";
import { YangJinjae, YangSungjae, MainBuilding } from "./pages/Dormitory.js";
import { Hanbit, StarLight, Milkyway } from "./pages/Cafeteria.js";
import {
  GetMainBuildingWeekMeal,
  GetYangsungjaeWeekMeal,
  GetYangjinjaeWeekMeal,
  GetHanbitWeekMeal,
  GetStarLightWeekMeal,
  GetMilkywayWeekMeal,
} from "./function/GetWeekMeal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMainbuildingWeekMeal,
  changeYangsungjaeWeekMeal,
  changeYangjinjaeWeekMeal,
  changeHanbitWeekMeal,
  changeStarLightWeekMeal,
  changeMilkywayWeekMeal,
} from "./store";

function App() {
  let dispatch = useDispatch();

  // let temp = useSelector((state) => {
  //   return state;
  // });

  // console.log(temp);

  // dispatch(changeValue("value"));

  // let test = GetMainBuildingWeekMeal();
  // test.then((value) => dispatch(changeValue(value)));

  useEffect(() => {
    let storeForMainBuildingWeekMeal = GetMainBuildingWeekMeal();
    storeForMainBuildingWeekMeal.then((value) => dispatch(changeMainbuildingWeekMeal(value)));

    let storeForYangsungjaeWeekMeal = GetYangsungjaeWeekMeal();
    storeForYangsungjaeWeekMeal.then((value) => dispatch(changeYangsungjaeWeekMeal(value)));

    let storeForYangjinjaeWeekMeal = GetYangjinjaeWeekMeal();
    storeForYangjinjaeWeekMeal.then((value) => dispatch(changeYangjinjaeWeekMeal(value)));

    let storeForHanbitWeekMeal = GetHanbitWeekMeal();
    storeForHanbitWeekMeal.then((value) => dispatch(changeHanbitWeekMeal(value)));

    let storeForStarLightWeekMeal = GetStarLightWeekMeal();
    storeForStarLightWeekMeal.then((value) => dispatch(changeStarLightWeekMeal(value)));

    let storeForMilkywayWeekMeal = GetMilkywayWeekMeal();
    storeForMilkywayWeekMeal.then((value) => dispatch(changeMilkywayWeekMeal(value)));
  }, []);

  let temp = useSelector((state) => {
    return state;
  });

  console.log(temp);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/??????" element={<MainBuilding />} />
        <Route path="/?????????" element={<YangSungjae />} />
        <Route path="/?????????" element={<YangJinjae />} />
        <Route
          path="/????????????"
          element={
            <div>
              <Hanbit />
            </div>
          }
        />
        <Route
          path="/????????????"
          element={
            <div>
              <StarLight />
            </div>
          }
        />
        <Route
          path="/???????????????"
          element={
            <div>
              <Milkyway />
            </div>
          }
        />
        <Route path="*" element={<div>????????? ?????? ????????????</div>} />
      </Routes>
    </div>
  );
}

export default App;
