import Clock from "../components/Clock";
import {
  YangsungjaeTodayMeal,
  YangjinjaeTodayMeal,
  HanbitTodayMeal,
  StarLightTodayMeal,
  MilkywayTodayMeal,
  MainBuildingTodayMeal,
} from "../components/TodayMeal";
import { Row, Col, Container } from "react-bootstrap";
import { CafeteriaTimeTable, DormitoryTimeTalbe } from "../components/TimeTable";

function Main() {
  let place = ["본관", "양성재", "양진재", "한빛식당", "별빛식당", "은하수식당"];

  // let todayMainBuildingMeal = temp.mainbuildingWeekMeal[0][0][today];
  // let todayYangSungjaeMeal = temp.yangsungjaeWeekMeal[0][0][today];
  // let todayYangJinjaeMeal = temp.yangjinjaeWeekMeal[0][0][today];

  // console.log(todayMainBuildingMeal);

  //console.log(today);

  return (
    <div>
      <Clock />
      <Container fluid>
        <Row>
          <Col>
            <MainBuildingTodayMeal place={place[0]} />
          </Col>
          <Col>
            <YangsungjaeTodayMeal place={place[1]} />
          </Col>
          <Col>
            <YangjinjaeTodayMeal place={place[2]} />
          </Col>
          <Col>
            <HanbitTodayMeal place={place[3]} />
          </Col>
          <Col>
            <StarLightTodayMeal place={place[4]} />
          </Col>
          <Col>
            <MilkywayTodayMeal place={place[5]} />
          </Col>
        </Row>
      </Container>

      <br />

      <div style={{ width: "50%", float: "left" }}>
        <DormitoryTimeTalbe />
      </div>
      <div style={{ width: "50%", float: "right" }}>
        <CafeteriaTimeTable />
      </div>
    </div>
  );
}

export default Main;
