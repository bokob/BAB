import "./../css/DormitoryTable.css";

async function GetMainBuildingThisWeekMeal() {
  let url = `http://127.0.0.1:8000/본관`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  console.log(result);
}

async function GetYangsungjaeThisWeekMeal() {
  let url = `http://127.0.0.1:8000/양성재`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  console.log(result);
}

async function GetYangjinjaeThisWeekMeal() {
  let url = `http://127.0.0.1:8000/양진재`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  console.log(result);
}

function Domitory(props) {
  // FaseAPI를 통해서 FireBase 접근해서 꺼내온다.

  if (props.place === "본관") {
    GetMainBuildingThisWeekMeal();
  } else if (props.place === "양성재") {
    GetYangsungjaeThisWeekMeal();
  } else if (props.place) {
    GetYangjinjaeThisWeekMeal();
  }

  return (
    <>
      <h2>{props.place}</h2>
      <br />
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
              <th scope="col">요일</th>
              <th scope="col">아침</th>
              <th scope="col">점심</th>
              <th scope="col">저녁</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map(function (element, i) {
              return <DormitoryDayMeal />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function MainBuilding() {
  return (
    <>
      <Domitory place={"본관"} />
    </>
  );
}
function YangSungjae() {
  return (
    <>
      <Domitory place={"양성재"} />
    </>
  );
}
function YangJinjae() {
  return (
    <>
      <Domitory place={"양진재"} />
    </>
  );
}

function DormitoryDayMeal() {
  return (
    <tr id="2023-01-02">
      <td classNameName="foodday">
        월요일 <br /> 2023-01-02
        <br />
      </td>
      {[1, 2, 3].map(() => (
        <DormitoryMeal />
      ))}
    </tr>
  );
}

function DormitoryMeal() {
  return (
    <td className="time">
      {" "}
      바바밥
      <br />
      구구국
      <br />
      반찬찬1
      <br />
      반찬찬2
      <br />
      에너지:257 Kcal
      <br />
      단백질:17 g<br />{" "}
    </td>
  );
}

export { Domitory, YangJinjae, YangSungjae, MainBuilding };
