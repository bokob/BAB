import "./../CSS/TimeTable.css";

function DormitoryTimeTalbe() {
  return (
    <table className="tgd" style={{ width: "668px", height: "250px", marginLeft: "auto", marginRight: "auto" }}>
      <colgroup>
        <col style={{ width: "68px" }} />
        <col style={{ width: "300px" }} />
        <col style={{ width: "300px" }} />
      </colgroup>
      <thead>
        <tr>
          <th>기숙사</th>
          <th>평일</th>
          <th>주말/공휴일/방학</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>아침</td>
          <td>07:20 ~ 09:00</td>
          <td>08:00 ~ 09:00</td>
        </tr>
        <tr>
          <td>점심</td>
          <td>11:30 ~ 13:30</td>
          <td>12:00 ~ 13:00</td>
        </tr>
        <tr>
          <td>저녁</td>
          <td>17:30 ~ 19:10</td>
          <td>17:30 ~ 19:00</td>
        </tr>
      </tbody>
    </table>
  );
}

function CafeteriaTimeTable() {
  return (
    <table className="tgc" style={{ width: "668px", height: "250px", marginLeft: "auto", marginRight: "auto" }}>
      <colgroup>
        <col style={{ width: "68px" }} />
        <col style={{ width: "100px" }} />
        <col style={{ width: "100px" }} />
        <col style={{ width: "100px" }} />
        <col style={{ width: "100px" }} />
        <col style={{ width: "100px" }} />
        <col style={{ width: "100px" }} />
      </colgroup>
      <thead>
        <tr>
          <th>학생식당</th>
          <th colspan="2">한빛</th>
          <th colspan="2">별빛</th>
          <th colspan="2">은하수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>학기</td>
          <td>방학</td>
          <td>학기</td>
          <td>방학</td>
          <td>학기</td>
          <td>방학</td>
        </tr>
        <tr>
          <td>아점</td>
          <td>10:00 ~ 13:00</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>점심</td>
          <td>11:00 ~ 14:00</td>
          <td>X</td>
          <td>11:30 ~ 14:00</td>
          <td>11:30 ~ 14:00</td>
          <td>11:30 ~ 13:30</td>
          <td>11:30 ~ 13:30</td>
        </tr>
        <tr>
          <td>저녁</td>
          <td>16:30:18:30</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>17:30 ~ 19:00</td>
          <td>X</td>
        </tr>
      </tbody>
    </table>
  );
}

export { DormitoryTimeTalbe, CafeteriaTimeTable };
