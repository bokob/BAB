import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import {Header, TodayMeal, Clock} from '../component.js'

function Main(){
    return(
        <div>
            {/* <Header/> */}
            <Clock/>
            오늘의 메뉴
            <Container>
            <Row>
                <Col>
                <Container>
                    기숙사 식당<br/><br/>
                    <Row>
                    <Col>
                    본관
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    <Col>
                    양성재
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    <Col>양진재
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    </Row>
                </Container>
                </Col>

                <Col>
                <Container>
                    학생 식당 <br/><br/>
                    <Row>
                    <Col>
                    한빛
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    <Col>
                    별빛
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    <Col>
                    은하수
                        <Container>
                        <TodayMeal/>
                        </Container>
                    </Col>
                    </Row>
                </Container>
                    
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Main;