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
          <Card.Title>๐์์นจ๐</Card.Title>
          <Card.Text>
            {}
            ๋ฉ๋ด1
            <br /> ๋ฉ๋ด2
            <br /> ๋ฉ๋ด3
            <br /> ๋ฉ๋ด4
            <br /> ๋ฉ๋ด5 <br />
            ์๋์ง:(์นผ๋ก๋ฆฌ) Kcal ๋จ๋ฐฑ์ง:(๋จ๋ฐฑ์ง) g
          </Card.Text>
          <Card.Title>โ์ ์ฌโ</Card.Title>
          <Card.Text>
            ๋ฉ๋ด1
            <br /> ๋ฉ๋ด2
            <br /> ๋ฉ๋ด3
            <br /> ๋ฉ๋ด4
            <br /> ๋ฉ๋ด5 <br />
            ์๋์ง:(์นผ๋ก๋ฆฌ) Kcal ๋จ๋ฐฑ์ง:(๋จ๋ฐฑ์ง) g
          </Card.Text>
          <Card.Text>
            <Card.Title>๐์ ๋๐</Card.Title>
            ๋ฉ๋ด1
            <br /> ๋ฉ๋ด2
            <br /> ๋ฉ๋ด3
            <br /> ๋ฉ๋ด4
            <br /> ๋ฉ๋ด5 <br />
            ์๋์ง:(์นผ๋ก๋ฆฌ) Kcal ๋จ๋ฐฑ์ง:(๋จ๋ฐฑ์ง) g
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
      return <h2>์ด์x ๋ฐฐ๋ฌ์ด๋ ์ํค์~</h2>;
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
            <Card.Title>๐์์นจ๐</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>โ์ ์ฌโ</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>๐์ ๋๐</Card.Title>
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
            <Card.Title>๐์์นจ๐</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>โ์ ์ฌโ</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>๐์ ๋๐</Card.Title>
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
            <Card.Title>๐์์นจ๐</Card.Title>
            <Card.Text>{temp[0][0][today][1]}</Card.Text>
            <Card.Title>โ์ ์ฌโ</Card.Title>
            <Card.Text>{temp[0][0][today][2]}</Card.Text>
            <Card.Text>
              <Card.Title>๐์ ๋๐</Card.Title>
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
  // console.log(temp[0].์์);
  // console.log(temp[0].์์[1][1]);

  if (temp.length > 0) {
    let brunch, lunch, dinner;

    for (let i = 0; i < temp[0].์์ .length; i++) {
      if (temp[0].์์ [i].hasOwnProperty(today)) {
        //console.log(temp[0].์์ [i][today]);
        brunch = temp[0].์์ [i][today];
      }
    }

    for (let i = 0; i < temp[0].์ ์ฌ.length; i++) {
      if (temp[0].์ ์ฌ[i].hasOwnProperty(today)) {
        //console.log(temp[0].์ ์ฌ[i][today]);
        lunch = temp[0].์ ์ฌ[i][today];
      }
    }

    for (let i = 0; i < temp[0].์์.length; i++) {
      if (temp[0].์์[i].hasOwnProperty(today)) {
        console.log(temp[0].์์[i][today]);
        //console.log("์ฑ๊ณต");
        dinner = temp[0].์์[i][today];
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
            <Card.Title>๐์์นจ๐</Card.Title>
            <Card.Text>{brunch}</Card.Text>
            <Card.Title>โ์ ์ฌโ</Card.Title>
            <Card.Text>{lunch}</Card.Text>
            <Card.Text>
              <Card.Title>๐์ ๋๐</Card.Title>
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

    for (let i = 0; i < temp[0].์ ์ฌ.length; i++) {
      if (temp[0].์ ์ฌ[i].hasOwnProperty(today)) {
        //console.log(temp[0].์ ์ฌ[i][today]);
        lunch = temp[0].์ ์ฌ[i][today];
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
            <Card.Title>โ์ ์ฌโ</Card.Title>
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

    for (let i = 0; i < temp[0].์ ์ฌ.length; i++) {
      if (temp[0].์ ์ฌ[i].hasOwnProperty(today)) {
        //console.log(temp[0].์ ์ฌ[i][today]);
        lunch = temp[0].์ ์ฌ[i][today];
      }
    }

    if (!temp[0].hasOwnProperty("์์")) {
      dinner = "๋ฐฉํ ๋ฏธ์ด์";
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
            <Card.Title>โ์ ์ฌโ</Card.Title>
            <Card.Text>{lunch}</Card.Text>
            <Card.Text>
              <Card.Title>๐์ ๋๐</Card.Title>
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
