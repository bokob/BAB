import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "./../App.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="danger" expand={expand} className="mb-3">
          <Container fluid>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={process.env.PUBLIC_URL + "BAB_logo.png"} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
              <span style={{ fontSize: "20px", textAlign: "center" }}> BAB</span>
            </Nav.Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                onClick={() => {
                  window.open("https://dorm.chungbuk.ac.kr/home/main.php");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                기숙사
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  window.open("https://www.cbnucoop.com/");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                생활협동조합
              </Nav.Link>
              <NavDropdown title={"주차별 식단표"} id="nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/본관");
                  }}
                >
                  본관
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/양성재");
                  }}
                >
                  양성재
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/양진재");
                  }}
                >
                  양진재
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/한빛식당");
                  }}
                >
                  한빛식당
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/별빛식당");
                  }}
                >
                  별빛식당
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/은하수식당");
                  }}
                >
                  은하수식당
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
