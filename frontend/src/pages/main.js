import Clock from "../components/Clock";
import TodayMeal from "../components/TodayMeal";
import { Row, Col, Container } from "react-bootstrap";
import { CafeteriaTimeTable, DormitoryTimeTalbe } from "./../components/TimeTable";

function Main() {
  let place = ["본관", "양성재", "양진재", "한빛식당", "별빛식당", "은하수식당"];

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

      {/* <Container>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <DormitoryTimeTalbe />
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <CafeteriaTimeTable />
          </Col>
        </Row>
      </Container> */}

      {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          <DormitoryTimeTalbe /> <CafeteriaTimeTable />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          2
        </Tab>
      </Tabs> */}
    </div>
  );
}

export default Main;
