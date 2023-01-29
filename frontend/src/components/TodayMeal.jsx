import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function TodayMeal(props) {
  let place = props.place;
  console.log(props.info);
  let address = "/" + place;

  // let breakfast = props.info.mainbuildingWeekMeal[0][0][props.today];
  // console.log(breakfast);

  return (
    <>
      <Card>
        <Card.Header>
          <Link to={address}>{place}</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>🛌아침🛌</Card.Title>
          <Card.Text>
            {}
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

function MainBuildingTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.mainbuildingWeekMeal;
  });

  console.log(temp);

  if (temp.length > 0) {
    if (temp[0][0][today] == null) {
      return <h2>운영x 배달이나 시키셈~</h2>;
    }

    return (
      <>
        <Card>
          <Card.Header>
            <Link to={address}>{place}</Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>🛌아침🛌</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>🌙저녁🌙</Card.Title>
              {temp[0][0][today][3]}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <>로딩중</>;
  }
}

function YangsungjaeTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.yangsungjaeWeekMeal;
  });

  if (temp.length > 0) {
    console.log(temp[0][0][today]);
    return (
      <>
        <Card>
          <Card.Header>
            <Link to={address}>{place}</Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>🛌아침🛌</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>🌙저녁🌙</Card.Title>
              {temp[0][0][today][3]}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <>로딩중</>;
  }
}

function YangjinjaeTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.yangjinjaeWeekMeal;
  });
  if (temp.length > 0) {
    console.log(temp[0][0][today]);
    return (
      <>
        <Card>
          <Card.Header>
            <Link to={address}>{place}</Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>🛌아침🛌</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>🌙저녁🌙</Card.Title>
              {temp[0][0][today][3]}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <>로딩중</>;
  }
}

function HanbitTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  return (
    <>
      <Card>
        <Card.Header>
          <Link to={address}>{place}</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>🛌아침🛌</Card.Title>
          <Card.Text>
            {}
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

function StarLightTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  return (
    <>
      <Card>
        <Card.Header>
          <Link to={address}>{place}</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>☀점심☀</Card.Title>
          <Card.Text>
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

function MilkywayTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  return (
    <>
      <Card>
        <Card.Header>
          <Link to={address}>{place}</Link>
        </Card.Header>
        <Card.Body>
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

export { TodayMeal, MainBuildingTodayMeal, YangsungjaeTodayMeal, YangjinjaeTodayMeal, HanbitTodayMeal, StarLightTodayMeal, MilkywayTodayMeal };
