import "./../css/CafeteriaTable.css";
import { GetMondayToFriday } from "../function/GetMondayToFriday.js";
import { useSelector } from "react-redux";

let dateHeader = GetMondayToFriday(); // 날짜 Array
let day = ["월요일", "화요일", " 수요일", "목요일", "금요일"]; // 요일

function Hanbit() {
  let temp = useSelector((state) => {
    return state.hanbitWeekMeal;
  });

  let checkKeyBrunch = [];
  let checkKeyBrunchIterator = -1;
  let checkKeyLunch = [];
  let checkKeyLunchIterator = -1;
  let checkKeyDinner = [];
  let checkKeyDinnerIterator = -1;

  console.log(temp);
  console.log(temp[0]);
  console.log(temp[0].아점);
  console.log(temp[0].아점[0]);
  console.log(temp[0].아점[0][2]);
  //let thisWeek = temp[0][0];
  //console.log(thisWeek);

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
                <th colSpan="5" class="row-time">
                  아점코너 (오전 10:00 ~ 오후 1:00)
                </th>
              </tr>
              <tr>
                {temp[0].아점.map(function (element, i) {
                  if (element.hasOwnProperty(0)) {
                    checkKeyBrunch.push(0);
                  } else if (element.hasOwnProperty(1)) {
                    checkKeyBrunch.push(1);
                  } else if (element.hasOwnProperty(2)) {
                    checkKeyBrunch.push(2);
                  } else if (element.hasOwnProperty(3)) {
                    checkKeyBrunch.push(3);
                  } else if (element.hasOwnProperty(4)) {
                    checkKeyBrunch.push(4);
                  }
                })}

                {
                  // 운영 안하면 null로 표시해서 비워버리게 표현예정
                  [0, 1, 2, 3, 4].map(function (element, i) {
                    if (checkKeyBrunch.includes(element)) {
                      checkKeyBrunchIterator += 1;
                      return (
                        <TestCafeteriaMeal
                          time={"아점"}
                          info={temp[0].아점[checkKeyBrunchIterator]}
                          checkKeyBrunch={checkKeyBrunch}
                          checkKeyBrunchIterator={checkKeyBrunchIterator}
                        />
                      );
                    } else return <td id="table-18-8-16-0"></td>;
                    // if (element != null) return <CafeteriaMeal />;
                    // else return <td id="table-18-8-16-0"></td>;
                  })
                }
              </tr>

              <tr>
                <th colSpan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {temp[0].점심.map(function (element, i) {
                  if (element.hasOwnProperty(0)) {
                    checkKeyLunch.push(0);
                  } else if (element.hasOwnProperty(1)) {
                    checkKeyLunch.push(1);
                  } else if (element.hasOwnProperty(2)) {
                    checkKeyLunch.push(2);
                  } else if (element.hasOwnProperty(3)) {
                    checkKeyLunch.push(3);
                  } else if (element.hasOwnProperty(4)) {
                    checkKeyLunch.push(4);
                  }
                })}
                {[0, 1, 2, 3, 4].map(function (element, i) {
                  if (checkKeyLunch.includes(element)) {
                    checkKeyLunchIterator += 1;
                    return (
                      <TestCafeteriaMeal
                        time={"점심"}
                        info={temp[0].점심[checkKeyLunchIterator]}
                        checkKeyLunch={checkKeyLunch}
                        checkKeyLunchIterator={checkKeyLunchIterator}
                      />
                    );
                  } else return <td></td>;
                })}
              </tr>

              <tr>
                <th colSpan="5" class="row-time">
                  석식코너 (오후 4:30 ~ 오후 6:30)
                </th>
              </tr>
              <tr>
                {temp[0].석식.map(function (element, i) {
                  if (element.hasOwnProperty(0)) {
                    checkKeyDinner.push(0);
                  } else if (element.hasOwnProperty(1)) {
                    checkKeyDinner.push(1);
                  } else if (element.hasOwnProperty(2)) {
                    checkKeyDinner.push(2);
                  } else if (element.hasOwnProperty(3)) {
                    checkKeyDinner.push(3);
                  } else if (element.hasOwnProperty(4)) {
                    checkKeyDinner.push(4);
                  }
                })}
                {[0, 1, 2, 3, 4].map(function (element, i) {
                  if (checkKeyDinner.includes(element)) {
                    checkKeyDinnerIterator += 1;
                    return (
                      <TestCafeteriaMeal
                        time={"석식"}
                        info={temp[0].석식[checkKeyDinnerIterator]}
                        checkKeyDinner={checkKeyDinner}
                        checkKeyDinnerIterator={checkKeyDinnerIterator}
                      />
                    );
                  } else return <td></td>;
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function StarLight() {
  let temp = useSelector((state) => {
    return state.starLightWeekMeal;
  });

  let checkKeyLunch = [];
  let checkKeyLunchIterator = -1;

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
                <th colSpan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {temp[0].점심.map(function (element, i) {
                  if (element.hasOwnProperty(0)) {
                    checkKeyLunch.push(0);
                  } else if (element.hasOwnProperty(1)) {
                    checkKeyLunch.push(1);
                  } else if (element.hasOwnProperty(2)) {
                    checkKeyLunch.push(2);
                  } else if (element.hasOwnProperty(3)) {
                    checkKeyLunch.push(3);
                  } else if (element.hasOwnProperty(4)) {
                    checkKeyLunch.push(4);
                  }
                })}
                {[0, 1, 2, 3, 4].map(function (element, i) {
                  if (checkKeyLunch.includes(element)) {
                    checkKeyLunchIterator += 1;
                    return (
                      <TestCafeteriaMeal
                        time={"점심"}
                        info={temp[0].점심[checkKeyLunchIterator]}
                        checkKeyLunch={checkKeyLunch}
                        checkKeyLunchIterator={checkKeyLunchIterator}
                      />
                    );
                  } else return <td></td>;
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Milkyway() {
  let temp = useSelector((state) => {
    return state.milkywayWeekMeal;
  });
  let checkKeyLunch = [];
  let checkKeyLunchIterator = -1;
  let checkKeyDinner = [];
  let checkKeyDinnerIterator = -1;

  console.log(temp);
  console.log(temp[0]);
  // console.log(temp[0].아점);
  // console.log(temp[0].아점[0]);
  // console.log(temp[0].아점[0][2]);

  let isVacation;
  if (Object.keys(temp[0]).length < 2) {
    isVacation = [true];
  }

  console.log(isVacation);

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
                <th colSpan="5" class="row-time">
                  점심식사 (오전 11:00 ~ 오후 2:00)
                </th>
              </tr>
              <tr>
                {temp[0].점심.map(function (element, i) {
                  if (element.hasOwnProperty(0)) {
                    checkKeyLunch.push(0);
                  } else if (element.hasOwnProperty(1)) {
                    checkKeyLunch.push(1);
                  } else if (element.hasOwnProperty(2)) {
                    checkKeyLunch.push(2);
                  } else if (element.hasOwnProperty(3)) {
                    checkKeyLunch.push(3);
                  } else if (element.hasOwnProperty(4)) {
                    checkKeyLunch.push(4);
                  }
                })}
                {[0, 1, 2, 3, 4].map(function (element, i) {
                  if (checkKeyLunch.includes(element)) {
                    checkKeyLunchIterator += 1;
                    return (
                      <TestCafeteriaMeal
                        time={"점심"}
                        info={temp[0].점심[checkKeyLunchIterator]}
                        checkKeyLunch={checkKeyLunch}
                        checkKeyLunchIterator={checkKeyLunchIterator}
                      />
                    );
                  } else return <td></td>;
                })}
              </tr>

              <tr>
                <th colSpan="5" class="row-time">
                  석식코너 (오후 4:30 ~ 오후 6:30)
                </th>
              </tr>
              <tr>
                {isVacation.map(function (element, i) {
                  if (!element) {
                    temp[0].석식.map(function (element, i) {
                      if (element.hasOwnProperty(0)) {
                        checkKeyDinner.push(0);
                      } else if (element.hasOwnProperty(1)) {
                        checkKeyDinner.push(1);
                      } else if (element.hasOwnProperty(2)) {
                        checkKeyDinner.push(2);
                      } else if (element.hasOwnProperty(3)) {
                        checkKeyDinner.push(3);
                      } else if (element.hasOwnProperty(4)) {
                        checkKeyDinner.push(4);
                      }

                      [0, 1, 2, 3, 4].map(function (element, i) {
                        if (checkKeyDinner.includes(element)) {
                          checkKeyDinnerIterator += 1;
                          return (
                            <TestCafeteriaMeal
                              time={"석식"}
                              info={temp[0].석식[checkKeyDinnerIterator]}
                              checkKeyDinner={checkKeyDinner}
                              checkKeyDinnerIterator={checkKeyDinnerIterator}
                            />
                          );
                        } else return <td></td>;
                      });
                    });
                  }
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

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

function TestCafeteriaMeal(props) {
  let info = props.info;
  let checkKey;
  let checkKeyIterator;

  if (props.time === "아점") {
    checkKey = props.checkKeyBrunch;
    checkKeyIterator = props.checkKeyBrunchIterator;
  } else if (props.time === "점심") {
    checkKey = props.checkKeyLunch;
    checkKeyIterator = props.checkKeyLunchIterator;
  } else if (props.time === "석식") {
    checkKey = props.checkKeyDinner;
    checkKeyIterator = props.checkKeyDinnerIterator;
  }

  // console.log(props.info);
  // console.log(props.checkKeyBrunch);
  // console.log(props.checkKeyBrunchIterator);

  return (
    <td id="table-20-6-12-{0:월, 1:화, ...}">
      <div class="menu" data-table="{0:월, 1:화, ...}">
        <div class="card menu-body ">
          <div class="card-body">
            {/*반찬의 개수는 유동적이라 map 함수로 만들어야 함*/}
            {info[checkKey[checkKeyIterator]]}
          </div>
        </div>
      </div>
    </td>
  );
}

export { Hanbit, StarLight, Milkyway };
