import "./../CSS/CafeteriaTable.css";

export default function Test() {
  return (
    // <div class="row restaurant">
    //   <div className="col-12" id="restaurant-menu">
    //     <div className="tab-content">
    //       <div class="tab-pane in active" id="tab1">
    //         <h4 class="mt-3">한빛식당</h4>
    //         <div class="table-responsive mb-4" id="menu-table">
    //           <table class="table">
    //             <thead>
    //               <tr>
    //                 <th rowspan="2">코너</th>
    //                 {/* <th rowspan="2">구분</th> */}
    //                 <th colspan="5">날짜</th>
    //               </tr>
    //               <tr>
    //                 <th class="weekday-title">01.23(월요일)</th>

    //                 <th class="weekday-title">01.24(화요일)</th>

    //                 <th class="weekday-title">01.25(수요일)</th>

    //                 <th class="weekday-title">01.26(목요일)</th>

    //                 <th class="weekday-title">01.27(금요일)</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <th colspan="5" class="row-time">
    //                   아점코너 (오전 10:00 ~ 오후 1:00)
    //                 </th>
    //               </tr>
    //               <tr>
    //                 <th rowspan="1" style={{ display: "none" }}>
    //                   아점
    //                 </th>

    //                 <th style={{ display: "none" }}>아점코너</th>
    //                 <th class="row-label">한빛식당 아점 아점코너</th>

    //                 <td id="table-18-9-17-0"></td>

    //                 <td id="table-18-9-17-1"></td>

    //                 <td id="table-18-9-17-2">
    //                   <div class="menu" data-table="18-9-17-2">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">카레라이스</h6>
    //                       <div class="card-body">
    //                         <li class="side">배추김치</li>
    //                         <li class="side">계란후라이</li>
    //                         <li class="side">미소장국</li>
    //                         <hr />￦<span class="add commas">3,300</span>
    //                         <br />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-9-17-3">
    //                   <div class="menu" data-table="18-9-17-3">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">참치마요주먹밥</h6>
    //                       <div class="card-body">
    //                         <li class="side">깍두기</li>
    //                         <li class="side">계란후라이</li>
    //                         <li class="side">볶음김치</li>
    //                         <li class="side">미소장국</li>
    //                         <hr />￦<span class="add commas">3,300</span>
    //                         <br />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-9-17-4">
    //                   <div class="menu" data-table="18-9-17-4">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">김밥볶음밥</h6>
    //                       <div class="card-body">
    //                         <li class="side">배추김치</li>
    //                         <li class="side">계란후라이</li>
    //                         <li class="side">미소장국</li>
    //                         <hr />￦<span class="add commas">3,300</span>
    //                         <br />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //               </tr>

    //               <tr>
    //                 <th colspan="5" class="row-time">
    //                   점심식사 (오전 11:00 ~ 오후 2:00)
    //                 </th>
    //               </tr>
    //               <tr>
    //                 <th rowspan="1" style={{ display: "none" }}>
    //                   일품
    //                 </th>

    //                 <th style={{ display: "none" }}>점심식사</th>
    //                 <th class="row-label">한빛식당 일품 점심식사</th>

    //                 <td id="table-18-8-16-0"></td>

    //                 <td id="table-18-8-16-1"></td>

    //                 <td id="table-18-8-16-2">
    //                   <div class="menu" data-table="18-8-16-2">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">부대찌개</h6>
    //                       <div class="card-body">
    //                         <li class="side">깍두기</li>
    //                         <li class="side">계란후라이</li>
    //                         <li class="side">어묵볶음</li>
    //                         <li class="side">쌀밥</li>
    //                         <hr />￦<span class="add commas">4,900</span>
    //                         <br />￦<span class="add commas">4,700</span>(조합원)
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-8-16-3">
    //                   <div class="menu" data-table="18-8-16-3">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">김치닭도리탕</h6>
    //                       <div class="card-body">
    //                         <li class="side">깍두기</li>
    //                         <li class="side">팽이무국</li>
    //                         <li class="side">쌀밥</li>
    //                         <li class="side">두부조림</li>
    //                         <hr />￦<span class="add commas">4,900</span>
    //                         <br />￦<span class="add commas">4,700</span>(조합원)
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-8-16-4">
    //                   <div class="menu" data-table="18-8-16-4">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">가츠동</h6>
    //                       <div class="card-body">
    //                         <li class="side">깍두기</li>
    //                         <li class="side">요구르트</li>
    //                         <li class="side">시원김치국</li>
    //                         <hr />￦<span class="add commas">4,900</span>
    //                         <br />￦<span class="add commas">4,700</span>(조합원)
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //               </tr>

    //               <tr>
    //                 <th colspan="5" class="row-time">
    //                   석식코너 (오후 4:30 ~ 오후 6:30)
    //                 </th>
    //               </tr>
    //               <tr>
    //                 <th rowspan="1" style={{ display: "none" }}>
    //                   석식
    //                 </th>

    //                 <th style={{ display: "none" }}>석식코너</th>
    //                 <th class="row-label">한빛식당 석식 석식코너</th>

    //                 <td id="table-18-10-18-0"></td>

    //                 <td id="table-18-10-18-1"></td>

    //                 <td id="table-18-10-18-2">
    //                   <div class="menu" data-table="18-10-18-2">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">짜장면</h6>
    //                       <div class="card-body">
    //                         <li class="side">배추김치</li>
    //                         <li class="side">쌀밥</li>
    //                         <li class="side">미소장국</li>
    //                         <li class="side">메추리알샐러드</li>
    //                         <hr />￦<span class="add commas">4,900</span>
    //                         <br />￦<span class="add commas">4,700</span>(조합원)
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-10-18-3">
    //                   <div class="menu" data-table="18-10-18-3">
    //                     <div class="card menu-body ">
    //                       <h6 class="card-header">오므라이스</h6>
    //                       <div class="card-body">
    //                         <li class="side">배추김치</li>
    //                         <li class="side">미역국</li>
    //                         <li class="side">교자만두튀김/초간장</li>
    //                         <hr />￦<span class="add commas">4,900</span>
    //                         <br />￦<span class="add commas">4,700</span>(조합원)
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td id="table-18-10-18-4"></td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="row restaurant">
      <div class="tab-content">
        <div class="tab-pane in active" id="tab1">
          {/* <!-                <h4 class="mt-3">한빛식당</h4>--> */}
          <div class="table-responsive mb-4" id="menu-table">
            <table class="table">
              <thead>
                {/* <!-                            <tr>-->
<!-                                <th rowspan="2">코너</th>-->
<!-                                <th rowspan="2">구분</th>-->
<!-                                <th colspan="5">날짜</th>-->
<!-                            </tr>--> */}
                <tr>
                  <th class="weekday-title">01.23(월요일)</th>

                  <th class="weekday-title">01.24(화요일)</th>

                  <th class="weekday-title">01.25(수요일)</th>

                  <th class="weekday-title">01.26(목요일)</th>

                  <th class="weekday-title">01.27(금요일)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="5" class="row-time">
                    아점코너 (오전 10:00 ~ 오후 1:00)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    아점
                  </th>

                  <th style={{ display: "none" }}>아점코너</th>
                  <th class="row-label">한빛식당 아점 아점코너</th>

                  <td id="table-18-9-17-0"></td>

                  <td id="table-18-9-17-1"></td>

                  <td id="table-18-9-17-2">
                    <div class="menu" data-table="18-9-17-2">
                      <div class="card menu-body ">
                        <h6 class="card-header">카레라이스</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">계란후라이</li>
                          <li class="side">미소장국</li>
                          <hr />￦<span class="add commas">3,300</span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-9-17-3">
                    <div class="menu" data-table="18-9-17-3">
                      <div class="card menu-body ">
                        <h6 class="card-header">참치마요주먹밥</h6>
                        <div class="card-body">
                          <li class="side">깍두기</li>
                          <li class="side">계란후라이</li>
                          <li class="side">볶음김치</li>
                          <li class="side">미소장국</li>
                          <hr />￦<span class="add commas">3,300</span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-9-17-4">
                    <div class="menu" data-table="18-9-17-4">
                      <div class="card menu-body ">
                        <h6 class="card-header">김밥볶음밥</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">계란후라이</li>
                          <li class="side">미소장국</li>
                          <hr />￦<span class="add commas">3,300</span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th colspan="5" class="row-time">
                    점심식사 (오전 11:00 ~ 오후 2:00)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    일품
                  </th>

                  <th style={{ display: "none" }}>점심식사</th>
                  <th class="row-label">한빛식당 일품 점심식사</th>

                  <td id="table-18-8-16-0"></td>

                  <td id="table-18-8-16-1"></td>

                  <td id="table-18-8-16-2">
                    <div class="menu" data-table="18-8-16-2">
                      <div class="card menu-body ">
                        <h6 class="card-header">부대찌개</h6>
                        <div class="card-body">
                          <li class="side">깍두기</li>
                          <li class="side">계란후라이</li>
                          <li class="side">어묵볶음</li>
                          <li class="side">쌀밥</li>
                          <hr />￦<span class="add commas">4,900</span>
                          <br />￦<span class="add commas">4,700</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-8-16-3">
                    <div class="menu" data-table="18-8-16-3">
                      <div class="card menu-body ">
                        <h6 class="card-header">김치닭도리탕</h6>
                        <div class="card-body">
                          <li class="side">깍두기</li>
                          <li class="side">팽이무국</li>
                          <li class="side">쌀밥</li>
                          <li class="side">두부조림</li>
                          <hr />￦<span class="add commas">4,900</span>
                          <br />￦<span class="add commas">4,700</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-8-16-4">
                    <div class="menu" data-table="18-8-16-4">
                      <div class="card menu-body ">
                        <h6 class="card-header">가츠동</h6>
                        <div class="card-body">
                          <li class="side">깍두기</li>
                          <li class="side">요구르트</li>
                          <li class="side">시원김치국</li>
                          <hr />￦<span class="add commas">4,900</span>
                          <br />￦<span class="add commas">4,700</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th colspan="5" class="row-time">
                    석식코너 (오후 4:30 ~ 오후 6:30)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    석식
                  </th>

                  <th style={{ display: "none" }}>석식코너</th>
                  <th class="row-label">한빛식당 석식 석식코너</th>

                  <td id="table-18-10-18-0"></td>

                  <td id="table-18-10-18-1"></td>

                  <td id="table-18-10-18-2">
                    <div class="menu" data-table="18-10-18-2">
                      <div class="card menu-body ">
                        <h6 class="card-header">짜장면</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">쌀밥</li>
                          <li class="side">미소장국</li>
                          <li class="side">메추리알샐러드</li>
                          <hr />￦<span class="add commas">4,900</span>
                          <br />￦<span class="add commas">4,700</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-10-18-3">
                    <div class="menu" data-table="18-10-18-3">
                      <div class="card menu-body ">
                        <h6 class="card-header">오므라이스</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">미역국</li>
                          <li class="side">교자만두튀김/초간장</li>
                          <hr />￦<span class="add commas">4,900</span>
                          <br />￦<span class="add commas">4,700</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-18-10-18-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tab-pane in" id="tab2">
          {/* <!--                <h4 class="mt-3">별빛식당</h4>--> */}
          <div class="table-responsive mb-4" id="menu-table">
            <table class="table">
              <thead>
                {/* <!--                            <tr>-->
<!--                                <th rowspan="2">코너</th>-->
<!--                                <th rowspan="2">구분</th>-->
<!--                                <th colspan="5">날짜</th>-->
<!--                            </tr>--> */}
                <tr>
                  <th class="weekday-title">01.23(월요일)</th>

                  <th class="weekday-title">01.24(화요일)</th>

                  <th class="weekday-title">01.25(수요일)</th>

                  <th class="weekday-title">01.26(목요일)</th>

                  <th class="weekday-title">01.27(금요일)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="5" class="row-time">
                    점심식사 (오전 11:30 ~ 오후 2:00)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    정식
                  </th>

                  <th style={{ display: "none" }}>점심식사</th>
                  <th class="row-label">별빛식당 정식 점심식사</th>

                  <td id="table-19-7-14-0"></td>

                  <td id="table-19-7-14-1"></td>

                  <td id="table-19-7-14-2">
                    <div class="menu" data-table="19-7-14-2">
                      <div class="card menu-body ">
                        <h6 class="card-header">김치눈꽃치즈함박스테이크</h6>
                        <div class="card-body">
                          <li class="side">깍두기</li>
                          <li class="side">요구르트</li>
                          <li class="side">콩나물무침</li>
                          <li class="side">배추된장국</li>
                          <li class="side">해물볶음우동</li>
                          <hr />￦<span class="add commas">5,800</span>
                          <br />￦<span class="add commas">5,400</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-19-7-14-3">
                    <div class="menu" data-table="19-7-14-3">
                      <div class="card menu-body ">
                        <h6 class="card-header">닭강정</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">요구르트</li>
                          <li class="side">계란파국</li>
                          <li class="side">양상추샐러드/검은깨드레싱</li>
                          <li class="side">마파두부</li>
                          <hr />￦<span class="add commas">5,800</span>
                          <br />￦<span class="add commas">5,400</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-19-7-14-4">
                    <div class="menu" data-table="19-7-14-4">
                      <div class="card menu-body ">
                        <h6 class="card-header">제육볶음</h6>
                        <div class="card-body">
                          <li class="side">배추김치</li>
                          <li class="side">요구르트</li>
                          <li class="side">무생채</li>
                          <li class="side">들깨미역국</li>
                          <li class="side">잡채</li>
                          <hr />￦<span class="add commas">5,800</span>
                          <br />￦<span class="add commas">5,400</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tab-pane in" id="tab3">
          {/* <!--                <h4 class="mt-3">은하수식당</h4>--> */}
          <div class="table-responsive mb-4" id="menu-table">
            <table class="table">
              <thead>
                {/* <!--                            <tr>-->
<!--                                <th rowspan="2">코너</th>-->
<!--                                <th rowspan="2">구분</th>-->
<!--                                <th colspan="5">날짜</th>-->
<!--                            </tr>--> */}
                <tr>
                  <th class="weekday-title">01.23(월요일)</th>

                  <th class="weekday-title">01.24(화요일)</th>

                  <th class="weekday-title">01.25(수요일)</th>

                  <th class="weekday-title">01.26(목요일)</th>

                  <th class="weekday-title">01.27(금요일)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="5" class="row-time">
                    점심식사 (오전 11:30 ~ 오후 1:30)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    정식
                  </th>

                  <th style={{ display: "none" }}>점심식사</th>
                  <th class="row-label">은하수식당 정식 점심식사</th>

                  <td id="table-20-6-12-0"></td>

                  <td id="table-20-6-12-1"></td>

                  <td id="table-20-6-12-2">
                    <div class="menu" data-table="20-6-12-2">
                      <div class="card menu-body ">
                        <h6 class="card-header">돈육주물럭</h6>
                        <div class="card-body">
                          <li class="side">콩나물국</li>
                          <li class="side">요구르트</li>
                          <li class="side">포기김치</li>
                          <li class="side">양배추쌈&amp;쌈장</li>
                          <li class="side">계란야채말이</li>
                          <li class="side">미역줄기볶음</li>
                          <hr />￦<span class="add commas">7,000</span>
                          <br />￦<span class="add commas">6,000</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-20-6-12-3">
                    <div class="menu" data-table="20-6-12-3">
                      <div class="card menu-body ">
                        <h6 class="card-header">간장치킨</h6>
                        <div class="card-body">
                          <li class="side">요구르트</li>
                          <li class="side">포기김치</li>
                          <li class="side">감자조림</li>
                          <li class="side">계란파국</li>
                          <li class="side">애배추겉절이</li>
                          <li class="side">무초절이</li>
                          <hr />￦<span class="add commas">7,000</span>
                          <br />￦<span class="add commas">6,000</span>(조합원)
                        </div>
                      </div>
                    </div>
                  </td>

                  <td id="table-20-6-12-4">
                    <div class="menu" data-table="20-6-12-4">
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
                </tr>

                <tr>
                  <th colspan="5" class="row-time">
                    저녁식사 (오후 5:30 ~ 오후 7:00)
                  </th>
                </tr>
                <tr>
                  <th rowspan="1" style={{ display: "none" }}>
                    석식
                  </th>

                  <th style={{ display: "none" }}>저녁식사</th>
                  <th class="row-label">은하수식당 석식 저녁식사</th>

                  <td id="table-20-13-25-0"></td>

                  <td id="table-20-13-25-1"></td>

                  <td id="table-20-13-25-2"></td>

                  <td id="table-20-13-25-3"></td>

                  <td id="table-20-13-25-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
