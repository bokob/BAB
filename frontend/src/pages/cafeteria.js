import "./../CSS/CafeteriaTable.css";

function TestHan() {
  return (
    <>
      <h1>한빛식당</h1>
      <div class="row restaurant">
        <div class="table-responsive mb-4" id="menu-table">
          <table class="table">
            <thead>
              <tr>
                {
                  // 대충 이런 형태로 만들 예정
                  ["월", "화", "수", "목", "금"].map(function (element, i) {
                    return <th class="weekday-title">01.23({element})</th>;
                  })
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="5" class="row-time">
                  아점코너 (오전 10:00 ~ 오후 1:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  석식코너 (오후 4:30 ~ 오후 6:30)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function TestLight() {
  return (
    <>
      <h1>별빛식당</h1>
      <div class="row restaurant">
        <div class="table-responsive mb-4" id="menu-table">
          <table class="table">
            <thead>
              <tr>
                {
                  // 대충 이런 형태로 만들 예정
                  ["월", "화", "수", "목", "금"].map(function (element, i) {
                    return <th class="weekday-title">01.23({element})</th>;
                  })
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="5" class="row-time">
                  아점코너 (오전 10:00 ~ 오후 1:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  석식코너 (오후 4:30 ~ 오후 6:30)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function TestMilky() {
  return (
    <>
      <h1>은하수식당</h1>
      <div class="row restaurant">
        <div class="table-responsive mb-4" id="menu-table">
          <table class="table">
            <thead>
              <tr>
                {
                  // 대충 이런 형태로 만들 예정
                  ["월", "화", "수", "목", "금"].map(function (element, i) {
                    return <th class="weekday-title">01.23({element})</th>;
                  })
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="5" class="row-time">
                  아점코너 (오전 10:00 ~ 오후 1:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colspan="5" class="row-time">
                  석식코너 (오후 4:30 ~ 오후 6:30)
                </th>
              </tr>
              <tr>
                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [null, 1, null, 3, 4].map(function (element, i) {
                    if (element != null) return <CafeteriaMeal />;
                    else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// function Hanbit() {
//   return <></>;
// }

// function StarLight() {
//   return <></>;
// }

// function MilkyWay() {
//   return <></>;
// }

// function CafeteriaWeekBrunchMeal() {
//   return <></>;
// }

function CafeteriaMeal() {
  return (
    <td id="table-20-6-12-{0:월, 1:화, ...}">
      <div class="menu" data-table="{0:월, 1:화, ...}">
        <div class="card menu-body ">
          <h6 class="card-header">오징어야채무침</h6>
          <div class="card-body">
            <li class="side">요구르트</li>
            <li class="side">포기김치</li>
            <li class="side">콩나물무침</li>
            <li class="side">통배추된장국</li>
            <li class="side">자장면/자장소스</li>
            <li class="side">단무지무침</li>
            <hr />￦<span class="add commas">7,000</span>
            <br />￦<span class="add commas">6,000</span>(조합원)
          </div>
        </div>
      </div>
    </td>
  );
}

export { TestHan, TestLight, TestMilky };
