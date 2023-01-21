import { NavLink } from "react-bootstrap";

export default function Logo() {
  // 로고
  return (
    <>
      {/* <img
          src={process.env.PUBLIC_URL + "babbabyee.png"}
          class="rounded mx-auto d-block"
          alt="밥밥이"
        /> */}
      <img src={process.env.PUBLIC_URL + "BAB_logo.png"} width="300" height="300" className="logo" alt="로고" />
      <div style={{ color: "black", fontSize: "30px", textAlign: "center" }}>
        <NavLink to="/home" style={{ color: "black", textDecoration: "none" }}>
          BAB
        </NavLink>
      </div>
    </>
  );
}
