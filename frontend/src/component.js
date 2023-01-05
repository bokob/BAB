import {Routes, Route, Link, NavLink, useNavigate, Outlet, Navigate } from 'react-router-dom';
import {Nav, Navbar, Container, Dropdown, DropdownButton, Card} from 'react-bootstrap';
//import styled from "styled-components";

function Logo(){    // 로고
    return(
    <>
    <img alt="밥밥이" src={process.env.PUBLIC_URL + 'babbabyee.png'} width="300" height="300" className="logo"/>
        <div style={{color:'black', fontSize:'30px', textAlign:'center'}}>
            <NavLink to='/home' style={{color:'black', textDecoration: 'none'}}>BAB</NavLink>
        </div>
    </>
    )
}

/*
function MealsPerWeek(){ // 주별 식단표
   return(
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
   )
}
*/

function Header(){ // 헤더
    const navigate = useNavigate();
    return(

        <div>
            <Logo/>
            <Navbar bg="white" variant="white">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

function TodayMeal(){
    return(
        <>
        <Card>
          <Card.Header> 장소 </Card.Header>
          <Card.Body>
            <Card.Title>아침</Card.Title>
            <Card.Text>
              아침메뉴
            </Card.Text>
            <Card.Title>점심</Card.Title>
            <Card.Text>
              점심메뉴
            </Card.Text>
            <Card.Text>
            <Card.Title>저녁</Card.Title>
              저녁메뉴
            </Card.Text>
          </Card.Body>
        </Card>
        </>
    )
}


function Clock(){

    let YMDT = new Date();
    let year = YMDT.getFullYear();
    let month = YMDT.getMonth() + 1;
    let date = YMDT.getDate();
    let day = YMDT.getDay();

    if(day == 0)
        day = "일"; 
    else if(day == 1)
        day = "월";
    else if(day == 2)
        day = "화";
    else if(day == 3)
        day = "수";
    else if(day == 4)
        day = "목";
    else if(day == 5)
        day = "금";
    else if(day == 6)
        day = "토";

    let result = String(year) + 
    '.' + String(month) + '.' + String(date) + ' (' + day +')';

    return(
        <div>{result}</div>
    )
}

export {Logo, Header, TodayMeal, Clock};