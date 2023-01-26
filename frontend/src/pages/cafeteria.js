import "./../css/CafeteriaTable.css";
import { GetMondayToFriday } from "../function/GetMondayToFriday.js";

let dateHeader = GetMondayToFriday(); // 날짜 Array
let day = ["월요일", "화요일", " 수요일", "목요일", "금요일"]; // 요일

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
                  // 날자 및 요일
                  dateHeader.map(function (element, i) {
                    return (
                      <th class="weekday-title">
                        {element}({day[i]})
                      </th>
                    );
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
                  // 날자 및 요일
                  dateHeader.map(function (element, i) {
                    return (
                      <th class="weekday-title">
                        {element}({day[i]})
                      </th>
                    );
                  })
                }
              </tr>
            </thead>
            <tbody>
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
                  // 날자 및 요일
                  dateHeader.map(function (element, i) {
                    return (
                      <th class="weekday-title">
                        {element}({day[i]})
                      </th>
                    );
                  })
                }
              </tr>
            </thead>
            <tbody>
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
          <h6 class="card-header">메인요리</h6>
          <div class="card-body">
            {/*반찬의 개수는 유동적이라 map 함수로 만들어야 함*/}
            <li class="side">반찬1</li>
            <li class="side">반찬2</li>
            <li class="side">반찬3</li>
            <li class="side">반찬4</li>
            <li class="side">반찬5</li>
            <li class="side">반찬6</li>
            <hr />￦<span class="add commas">정가</span>
            <br />￦<span class="add commas">할인가</span>(조합원)
          </div>
        </div>
      </div>
    </td>
  );
}

export { TestHan, TestLight, TestMilky };
