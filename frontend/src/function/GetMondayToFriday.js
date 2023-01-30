function GetMondayToFriday() {
  var date = new Date().toLocaleDateString();
  var today = Date.parse(date);
  var result = [];

  var day = new Date(today).getDay();

  console.log("오늘은 무슨 요일일까요?: " + day);

  today -= 86400000 * day;
  for (var i = 0; i < 5; i++) {
    today += 86400000;
    result.push(new Date(today).toLocaleDateString());
  }

  return result;
}

export { GetMondayToFriday };
