import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function TodayMeal(props) {
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
