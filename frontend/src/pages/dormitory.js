import Header from "./../components/Header";

function Domitory(props) {
  return (
    <>
      <Header />
      {props.place}
      <div>
        <table className="contTable_c m_table_c margin_t_30" style={{ textAlign: "center" }}>
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "13%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">요일</th>
              <th scope="col">아침</th>
              <th scope="col">점심</th>
              <th scope="col">저녁</th>
            </tr>
          </thead>
          <tbody>
            <tr id="2023-01-02">
              <td classNameName="foodday">
                월요일 <br /> 2023-01-02
                <br />
              </td>
              <td className="morning">
                {" "}
                흰밥/우유(두유)/김치
                <br />
                콩나물김치국
                <br />
                계란말이
                <br />
                닭가슴살샐러드
                <br />
                에너지:257 Kcal
                <br />
                단백질:17 g<br />{" "}
              </td>
              <td classNameName="lunch">
                {" "}
                흰밥/김치
                <br />
                떡만두국
                <br />
                깻잎어묵전
                <br />
                모듬묵무침
                <br />
                참나물무침
                <br />
                귤2개
                <br />
                에너지:1119 Kcal
                <br />
                단백질:36 g<br />{" "}
              </td>
              <td classNameName="evening">
                {" "}
                참치마요덮밥
                <br />
                유부된장국
                <br />
                팝콘치킨샐러드
                <br />
                오이지무침
                <br />
                김치
                <br />
                에너지:1165 Kcal
                <br />
                단백질:62 g<br />
              </td>
            </tr>
            <tr id="2023-01-03">
              <td classNameName="foodday">
                화요일 <br /> 2023-01-03
                <br />
              </td>
              <td className="morning">
                {" "}
                흰밥/우유(두유)/김치
                <br />
                쇠고기미역국
                <br />
                매운돈사태찜
                <br />
                새송이피망볶음
                <br />
                에너지:509 Kcal
                <br />
                단백질:38 g<br />{" "}
              </td>
              <td classNameName="lunch">
                {" "}
                흰밥/김치
                <br />
                우사골순대국
                <br />
                부추계란찜
                <br />
                김자반볶음
                <br />
                방울토마토샐러드
                <br />
                에너지:949 Kcal
                <br />
                단백질:17 g<br />{" "}
              </td>
              <td classNameName="evening">
                {" "}
                검정콩밥
                <br />
                돈육김치찌개
                <br />
                삼치구이
                <br />
                비엔나파프리카볶음
                <br />
                미역줄기볶음
                <br />
                깍두기
                <br />
                에너지:860 Kcal
                <br />
                단백질:46 g<br />
              </td>
            </tr>
            <tr id="2023-01-04">
              <td classNameName="foodday">
                수요일 <br /> 2023-01-04
                <br />
              </td>
              <td classNameName="morning">
                {" "}
                허니브레드
                <br />
                흰밥/우유(두유)/김치
                <br />
                푸실리샐러드
                <br />
                스크램블에그
                <br />
                누룽지국
                <br />
                에너지:1335 Kcal
                <br />
                단백질:23 g<br />{" "}
              </td>
              <td classNameName="lunch">
                {" "}
                흰밥/김치
                <br />
                콩나물매운국
                <br />
                소불고기
                <br />
                브로콜리새송이볶음
                <br />
                아몬드멸치볶음
                <br />
                에너지:717 Kcal
                <br />
                단백질:50 g<br />{" "}
              </td>
              <td classNameName="evening">
                {" "}
                새싹비빔밥
                <br />
                두부된장국
                <br />
                고구마맛탕
                <br />
                김치
                <br />
                요구르트
                <br />
                에너지:1337 Kcal
                <br />
                단백질:45 g<br />
              </td>
            </tr>

            <tr id="2023-01-05" classNameName="ovfood">
              <td classNameName="foodday">
                <strong classNameName="dormRed">
                  목요일 <br /> 2023-01-05
                  <br />
                </strong>
              </td>
              <td className="morning">
                {" "}
                흰밥/우유(두유)/김치
                <br />
                배추된장국
                <br />
                오징어볶음
                <br />
                시리얼바나나견과샐러드
                <br />
                물미역브로콜리초장
                <br />
                에너지:804 Kcal
                <br />
                단백질:48 g<br />{" "}
              </td>
              <td classNameName="lunch">
                {" "}
                흰밥/김치
                <br />
                북어감자국
                <br />
                둥지를 튼 닭<br />
                연근견과류조림
                <br />
                시금치나물
                <br />
                에너지:987 Kcal
                <br />
                단백질:22 g<br />{" "}
              </td>
              <td classNameName="evening">
                {" "}
                후리카케김가루밥
                <br />
                유부버섯우동
                <br />
                오징어김치전
                <br />
                미나리무생채
                <br />
                김치
                <br />
                에너지:722 Kcal
                <br />
                단백질:28 g<br />
              </td>
            </tr>
            <tr id="2023-01-06">
              <td classNameName="foodday">
                금요일 <br /> 2023-01-06
                <br />
              </td>
              <td className="morning">
                {" "}
                흰밥/우유(두유)/김치
                <br />
                쇠고기무콩나물국
                <br />
                마파두부
                <br />
                갈릭버섯샐러드
                <br />
                에너지:353 Kcal
                <br />
                단백질:21 g<br />{" "}
              </td>
              <td classNameName="lunch">
                {" "}
                기장밥
                <br />
                등뼈감자탕
                <br />
                땡초계란말이
                <br />
                건새우마늘쫑볶음
                <br />
                석박지
                <br />
                요구르트
                <br />
                에너지:864 Kcal
                <br />
                단백질:14 g<br />{" "}
              </td>
              <td classNameName="evening">
                {" "}
                흑미밥
                <br />
                배추팽이된장국
                <br />
                생선까스&소스
                <br />
                상추부추무침
                <br />
                도토리묵무침
                <br />
                김치
                <br />
                에너지:762 Kcal
                <br />
                단백질:28 g<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function YangJinjae() {
  return <div></div>;
}

function YangSungjae() {
  return <div></div>;
}

function MainBuilding() {
  return <div></div>;
}

export { Domitory, YangJinjae, YangSungjae, MainBuilding };
