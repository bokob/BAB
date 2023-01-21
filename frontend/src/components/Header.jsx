import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import MealsPerWeek from "./MealsPerWeek";

export default function Header() {
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
            <img src={process.env.PUBLIC_URL + "BAB_logo.png"} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
            <span style={{ fontSize: "20px", textAlign: "center" }}> BAB</span>
          </Nav.Link>
          <MealsPerWeek />
        </div>
      </nav>
    </div>
  );
}
