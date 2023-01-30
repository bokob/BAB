import "../css/AnalogClock.css";
import { useEffect } from "react";

export default function AnalogClock() {
  const deg = 6;
  useEffect(() => {
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");
    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
      hr.style.transform = `rotateZ(${hh}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  }, []);

  return (
    <div className="d-inline-block align-text-top">
      <div className="clock">
        <div className="hour">
          <div id="hr" className="hr"></div>
        </div>
        <div class="min">
          <div id="mn" className="mn"></div>
        </div>
        <div class="sec">
          <div id="sc" className="sc"></div>
        </div>
      </div>
    </div>
  );
}
