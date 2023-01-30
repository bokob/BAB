import "./../css/DormitoryTable.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, Button } from "react-bootstrap";

function MainBuilding() {
  let temp = useSelector((state) => {
    return state.mainbuildingWeekMeal;
  });

  let week;
  let [pressThisWeek, setPressThisWeek] = useState(true);
  let [pressNextWeek, setPressNextWeek] = useState(false);

  function PressThisweek() {
    console.log("이번주로 가자ㅋ");
    setPressThisWeek(true);
    setPressNextWeek(false);
  }

  function PressNextWeek() {
    console.log("다음주로 가자ㅋ");
    setPressThisWeek(false);
    setPressNextWeek(true);
  }

  console.log(temp);
  let thisWeek = temp[0][0];
  let nextWeek = temp[0][1];

  if (pressThisWeek && !pressNextWeek) {
    week = thisWeek;
  } else if (!pressThisWeek && pressNextWeek) {
    week = nextWeek;
  }

  return (
    <>
      <br />
      <h1>
        {pressNextWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressThisweek();
              }}
              variant="danger"
            >
              {"<"}
            </Button>
            &nbsp;
          </>
        ) : (
          <>
            &nbsp;
            <Button variant="danger"> </Button>
            &nbsp;
          </>
        )}

        <Badge pill bg="danger">
          본관
        </Badge>

        {pressThisWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressNextWeek();
              }}
              variant="danger"
            >
              {">"}
            </Button>
          </>
        ) : (
          <>
            <>
              &nbsp;
              <Button variant="danger"> </Button>
              &nbsp;
            </>
          </>
        )}
      </h1>
      <br />
      <div className="">
        <table className="contTable_c m_table_c margin_t_30">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                요일
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                아침
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                점심
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                저녁
              </th>
            </tr>
          </thead>
          <tbody>
            {week.map(function (element, i) {
              if (element !== null)
                return (
                  <>
                    <DormitoryDayMeal info={element} idx={i} isThisWeek={pressThisWeek} />
                  </>
                );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
function YangSungjae() {
  let temp = useSelector((state) => {
    return state.yangsungjaeWeekMeal;
  });

  let week;
  let [pressThisWeek, setPressThisWeek] = useState(true);
  let [pressNextWeek, setPressNextWeek] = useState(false);

  function PressThisweek() {
    console.log("이번주로 가자ㅋ");
    setPressThisWeek(true);
    setPressNextWeek(false);
  }

  function PressNextWeek() {
    console.log("다음주로 가자ㅋ");
    setPressThisWeek(false);
    setPressNextWeek(true);
  }

  console.log(temp);
  console.log(temp[0]);
  let thisWeek = temp[0][0];
  let nextWeek = temp[0][1];
  console.log(thisWeek);
  console.log(nextWeek);

  if (pressThisWeek && !pressNextWeek) {
    week = thisWeek;
  } else if (!pressThisWeek && pressNextWeek) {
    week = nextWeek;
  }

  return (
    <>
      <br />
      <h1>
        {pressNextWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressThisweek();
              }}
              variant="danger"
            >
              {"<"}
            </Button>
            &nbsp;
          </>
        ) : (
          <>
            &nbsp;
            <Button variant="danger"> </Button>
            &nbsp;
          </>
        )}

        <Badge pill bg="danger">
          양성재
        </Badge>

        {pressThisWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressNextWeek();
              }}
              variant="danger"
            >
              {">"}
            </Button>
          </>
        ) : (
          <>
            <>
              &nbsp;
              <Button variant="danger"> </Button>
              &nbsp;
            </>
          </>
        )}
      </h1>
      <br />
      <div className="">
        <table className="contTable_c m_table_c margin_t_30">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                요일
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                아침
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                점심
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                저녁
              </th>
            </tr>
          </thead>
          <tbody>
            {week.map(function (element, i) {
              if (element !== null)
                return (
                  <>
                    <DormitoryDayMeal info={element} idx={i} isThisWeek={pressThisWeek} />
                  </>
                );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
function YangJinjae() {
  let temp = useSelector((state) => {
    return state.yangjinjaeWeekMeal;
  });

  let week;
  let [pressThisWeek, setPressThisWeek] = useState(true);
  let [pressNextWeek, setPressNextWeek] = useState(false);

  function PressThisweek() {
    console.log("이번주로 가자ㅋ");
    setPressThisWeek(true);
    setPressNextWeek(false);
  }

  function PressNextWeek() {
    console.log("다음주로 가자ㅋ");
    setPressThisWeek(false);
    setPressNextWeek(true);
  }

  console.log(temp);
  let thisWeek = temp[0][0];
  let nextWeek = temp[0][1];
  console.log(thisWeek);
  console.log(nextWeek);

  if (pressThisWeek && !pressNextWeek) {
    week = thisWeek;
  } else if (!pressThisWeek && pressNextWeek) {
    week = nextWeek;
  }

  return (
    <>
      <br />
      <h1>
        {pressNextWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressThisweek();
              }}
              variant="danger"
            >
              {"<"}
            </Button>
            &nbsp;
          </>
        ) : (
          <>
            &nbsp;
            <Button variant="danger"> </Button>
            &nbsp;
          </>
        )}

        <Badge pill bg="danger">
          양진재
        </Badge>

        {pressThisWeek ? (
          <>
            &nbsp;
            <Button
              onClick={(e) => {
                PressNextWeek();
              }}
              variant="danger"
            >
              {">"}
            </Button>
          </>
        ) : (
          <>
            <>
              &nbsp;
              <Button variant="danger"> </Button>
              &nbsp;
            </>
          </>
        )}
      </h1>
      <br />
      <div className="">
        <table className="contTable_c m_table_c margin_t_30">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                요일
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                아침
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                점심
              </th>
              <th scope="col" style={{ backgroundColor: "#F8F8F8" }}>
                저녁
              </th>
            </tr>
          </thead>
          <tbody>
            {week.map(function (element, i) {
              if (element !== null)
                return (
                  <>
                    <DormitoryDayMeal info={element} idx={i} isThisWeek={pressThisWeek} />
                  </>
                );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DormitoryDayMeal(props) {
  //console.log(props.info);

  let today = new Date().getDay();

  let day;
  switch (props.idx) {
    case 0:
      day = "일요일";
      break;
    case 1:
      day = "월요일";
      break;
    case 2:
      day = "화요일";
      break;
    case 3:
      day = "수요일";
      break;
    case 4:
      day = "목요일";
      break;
    case 5:
      day = "금요일";
      break;
    case 6:
      day = "토요일";
      break;
    default:
      day = "?";
      break;
  }

  if (props.idx === today) {
    if (props.isThisWeek === true) {
      return (
        <tr id={day} style={{ backgroundColor: "#F8ABA6" }}>
          <td className="foodday">
            {day} <br /> {props.info[0]}
            <br />
          </td>
          {[1, 2, 3].map(function (element, i) {
            return <DormitoryMeal info={props.info[element]} />;
          })}
        </tr>
      );
    } else {
      return (
        <tr id={day}>
          <td className="foodday">
            {day} <br /> {props.info[0]}
            <br />
          </td>
          {[1, 2, 3].map(function (element, i) {
            return <DormitoryMeal info={props.info[element]} />;
          })}
        </tr>
      );
    }
  } else {
    return (
      <tr id={day}>
        <td className="foodday">
          {day} <br /> {props.info[0]}
          <br />
        </td>
        {[1, 2, 3].map(function (element, i) {
          return <DormitoryMeal info={props.info[element]} />;
        })}
      </tr>
    );
  }
}

function DormitoryMeal(props) {
  return (
    <td className="time">
      {" "}
      {props.info}
      {/* <br />
      구구국
      <br />
      반찬찬1
      <br />
      반찬찬2
      <br />
      에너지:257 Kcal
      <br />
      단백질:17 g<br />{" "} */}
    </td>
  );
}

export { YangJinjae, YangSungjae, MainBuilding };
