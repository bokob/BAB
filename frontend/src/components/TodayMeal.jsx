import { Link } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./../css/TodayMeal.css";

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
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
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
    return <Spinner animation="border" variant="danger" />;
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
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
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
    return <Spinner animation="border" variant="danger" />;
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
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
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
    return <Spinner animation="border" variant="danger" />;
  }
}

function HanbitTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.hanbitWeekMeal;
  });

  // console.log(temp);
  // console.log(temp[0]);
  // console.log(temp[0].석식);
  // console.log(temp[0].석식[1][1]);

  if (temp.length > 0) {
    let brunch, lunch, dinner;

    for (let i = 0; i < temp[0].아점.length; i++) {
      if (temp[0].아점[i].hasOwnProperty(today)) {
        //console.log(temp[0].아점[i][today]);
        brunch = temp[0].아점[i][today];
      }
    }

    for (let i = 0; i < temp[0].점심.length; i++) {
      if (temp[0].점심[i].hasOwnProperty(today)) {
        //console.log(temp[0].점심[i][today]);
        lunch = temp[0].점심[i][today];
      }
    }

    for (let i = 0; i < temp[0].석식.length; i++) {
      if (temp[0].석식[i].hasOwnProperty(today)) {
        console.log(temp[0].석식[i][today]);
        //console.log("성공");
        dinner = temp[0].석식[i][today];
      }
    }

    return (
      <>
        <Card>
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>🛌아침🛌</Card.Title>
            <Card.Text>{brunch}</Card.Text>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{lunch}</Card.Text>
            <Card.Text>
              <Card.Title>🌙저녁🌙</Card.Title>
              {dinner}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <Spinner animation="border" variant="danger" />;
  }
}

function StarLightTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.starLightWeekMeal;
  });

  if (temp.length > 0) {
    let lunch;

    for (let i = 0; i < temp[0].점심.length; i++) {
      if (temp[0].점심[i].hasOwnProperty(today)) {
        //console.log(temp[0].점심[i][today]);
        lunch = temp[0].점심[i][today];
      }
    }
    return (
      <>
        <Card>
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{lunch}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <Spinner animation="border" variant="danger" />;
  }
}

function MilkywayTodayMeal(props) {
  let place = props.place;
  let address = "/" + place;
  let today = new Date().getDay();

  let temp = useSelector((state) => {
    return state.milkywayWeekMeal;
  });

  console.log(temp);

  if (temp.length > 0) {
    let lunch, dinner;

    for (let i = 0; i < temp[0].점심.length; i++) {
      if (temp[0].점심[i].hasOwnProperty(today)) {
        //console.log(temp[0].점심[i][today]);
        lunch = temp[0].점심[i][today];
      }
    }

    if (!temp[0].hasOwnProperty("석식")) {
      dinner = "방학 미운영";
    }

    return (
      <>
        <Card>
          <Card.Header id="Card-Header">
            <Link to={address} className="Card-Header-Place">
              {place}
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>☀점심☀</Card.Title>
            <Card.Text>{lunch}</Card.Text>
            <Card.Text>
              <Card.Title>🌙저녁🌙</Card.Title>
              {dinner}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <Spinner animation="border" variant="danger" />;
  }
}

export { TodayMeal, MainBuildingTodayMeal, YangsungjaeTodayMeal, YangjinjaeTodayMeal, HanbitTodayMeal, StarLightTodayMeal, MilkywayTodayMeal };
