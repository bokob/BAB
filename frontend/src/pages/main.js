import Header from "./../components/Header";
import Clock from "./../components/Clock";
import TodayMeal from "./../components/TodayMeal";
import TimeTable from "./../components/TimeTable";

function Main() {
  let place = ["본관", "양성재", "양진재", "한빛식당", "별빛식당", "은하수식당"];

  return (
    <div>
      <Header />
      <Clock />
      <div className="container text-center">
        <div class="row">
          <div class="col">
            <TodayMeal place={place[0]} />
          </div>
          <div class="col">
            <TodayMeal place={place[1]} />
          </div>
          <div class="col">
            <TodayMeal place={place[2]} />
          </div>
          <div class="col">
            <TodayMeal place={place[3]} />
          </div>
          <div class="col">
            <TodayMeal place={place[4]} />
          </div>
          <div class="col">
            <TodayMeal place={place[5]} />
          </div>
        </div>
      </div>
      <div>
        <TimeTable />
      </div>
    </div>
  );
}

export default Main;
