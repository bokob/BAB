import Clock from "../components/Clock";
import TodayMeal from "../components/TodayMeal";
import { Row, Col, Container } from "react-bootstrap";
import { CafeteriaTimeTable, DormitoryTimeTalbe } from "../components/TimeTable";
import { useSelector } from "react-redux";

function Main() {
  let place = ["본관", "양성재", "양진재", "한빛식당", "별빛식당", "은하수식당"];

  let temp = useSelector((state) => {
    return state;
  });

  console.log(temp);

  let today = new Date().getDay();

  console.log(today);

  return (
    <div>
      <Clock />
      <Container fluid>
        <Row>
          <Col>
            <TodayMeal place={place[0]} />
          </Col>
          <Col>
            <TodayMeal place={place[1]} />
          </Col>
          <Col>
            <TodayMeal place={place[2]} />
          </Col>
          <Col>
            <TodayMeal place={place[3]} />
          </Col>
          <Col>
            <TodayMeal place={place[4]} />
          </Col>
          <Col>
            <TodayMeal place={place[5]} />
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
