import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Dropdown,
  DropdownButton,
  Card,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";
import { useState, useEffect } from "react";
//import styled from "styled-components";

function Logo() {
  // 로고
  return (
    <>
      {/* <img
        src={process.env.PUBLIC_URL + "babbabyee.png"}
        class="rounded mx-auto d-block"
        alt="밥밥이"
      /> */}
      <img
        src={process.env.PUBLIC_URL + "BAB_logo.png"}
        width="300"
        height="300"
        className="logo"
        alt="로고"
      />
      <div style={{ color: "black", fontSize: "30px", textAlign: "center" }}>
        <NavLink to="/home" style={{ color: "black", textDecoration: "none" }}>
          BAB
        </NavLink>
      </div>
    </>
  );
}

function MealsPerWeek() {
  // 주별 식단표
  return (
    <>
      <DropdownButton id="dropdown-item-button" title="주별 식단표">
        <Dropdown.ItemText>선택</Dropdown.ItemText>
        <Dropdown.Item as="button">본관</Dropdown.Item>
        <Dropdown.Item as="button">양성재</Dropdown.Item>
        <Dropdown.Item as="button">양진재</Dropdown.Item>
        <Dropdown.Item as="button">한빛</Dropdown.Item>
        <Dropdown.Item as="button">별빛</Dropdown.Item>
        <Dropdown.Item as="button">은하수</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

function Header() {
  // 헤더
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "black", textDecoration: "none" }}
          >
            <img
              src={process.env.PUBLIC_URL + "BAB_logo.png"}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <span style={{ fontSize: "20px", textAlign: "center" }}> BAB</span>
          </Nav.Link>
          <MealsPerWeek />
        </div>
      </nav>
    </div>
  );
}

function TodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  console.log(address);

  return (
    <>
      <Card>
        <Card.Header>
          <Link to={address}>{place}</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>🛌아침🛌</Card.Title>
          <Card.Text>
            메뉴1
            <br /> 메뉴2
            <br /> 메뉴3
            <br /> 메뉴4
            <br /> 메뉴5 <br />
            에너지:(칼로리) Kcal 단백질:(단백질) g
          </Card.Text>
          <Card.Title>☀점심☀</Card.Title>
          <Card.Text>
            메뉴1
            <br /> 메뉴2
            <br /> 메뉴3
            <br /> 메뉴4
            <br /> 메뉴5 <br />
            에너지:(칼로리) Kcal 단백질:(단백질) g
          </Card.Text>
          <Card.Text>
            <Card.Title>🌙저녁🌙</Card.Title>
            메뉴1
            <br /> 메뉴2
            <br /> 메뉴3
            <br /> 메뉴4
            <br /> 메뉴5 <br />
            에너지:(칼로리) Kcal 단백질:(단백질) g
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  let YMDT = new Date();
  let year = YMDT.getFullYear();
  let month = YMDT.getMonth() + 1;
  let date = YMDT.getDate();
  let day = YMDT.getDay();

  if (day == 0) day = "일";
  else if (day == 1) day = "월";
  else if (day == 2) day = "화";
  else if (day == 3) day = "수";
  else if (day == 4) day = "목";
  else if (day == 5) day = "금";
  else if (day == 6) day = "토";

  let finalDate =
    String(year) + "." + String(month) + "." + String(date) + " (" + day + ")";

  return (
    <div>
      <br />
      <img
        src={process.env.PUBLIC_URL + "clock.png"}
        alt="clock"
        width="100"
        height="100"
        className="d-inline-block align-text-top"
      />
      <br />
      <br />
      <h2>
        <span>{time.toLocaleTimeString()}</span>
      </h2>
      <h4>
        <span>
          {finalDate} <br />
          <br /> 오늘의 식단
        </span>
      </h4>
    </div>
  );
}

function TimeTable() {
  return (
    <Tabs
      defaultActiveKey="기숙사"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="기숙사">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>평일</th>
              <th>주말/공휴일/방학</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>아침</td>
              <td>07:20~09:00</td>
              <td>08:00~09:00</td>
            </tr>
            <tr>
              <td>점심</td>
              <td>11:30~13:30</td>
              <td>12:00~13:00</td>
            </tr>
            <tr>
              <td>저녁</td>
              <td>17:30~19:10</td>
              <td>17:30~19:00</td>
            </tr>
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="profile" title="학생식당">
        학생식당
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>한빛</th>
              <th>별빛</th>
              <th></th>
              <th>은하수</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </thead>
          <tbody>
            <tr>
              <td>아점</td>
              <td>07:20~09:00</td>
              <td>08:00~09:00</td>
            </tr>
            <tr>
              <td>점심</td>
              <td>11:30~13:30</td>
              <td>12:00~13:00</td>
            </tr>
            <tr>
              <td>저녁</td>
              <td>17:30~19:10</td>
              <td>17:30~19:00</td>
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}

export { Logo, Header, TodayMeal, Clock, MealsPerWeek, TimeTable };
