async function GetMainBuildingWeekMeal() {
  let url = `http://127.0.0.1:8000/본관`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  // console.log(result);
  return result;
}

async function GetYangsungjaeWeekMeal() {
  let url = `http://127.0.0.1:8000/양성재`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  //console.log(result);
  return result;
}

async function GetYangjinjaeWeekMeal() {
  let url = `http://127.0.0.1:8000/양진재`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  //console.log(result);
  return result;
}

async function GetHanbitWeekMeal() {
  let url = `http://127.0.0.1:8000/한빛식당`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  //console.log(result);
  return result;
}

async function GetStarLightWeekMeal() {
  let url = `http://127.0.0.1:8000/별빛식당`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  //console.log(result);
  return result;
}

async function GetMilkywayWeekMeal() {
  let url = `http://127.0.0.1:8000/은하수식당`;
  const response = await fetch(url, { headers: { Accept: "application / json" }, method: "GET" });
  let result = await response.json();
  //console.log(result);
  return result;
}

export { GetMainBuildingWeekMeal, GetYangsungjaeWeekMeal, GetYangjinjaeWeekMeal, GetHanbitWeekMeal, GetStarLightWeekMeal, GetMilkywayWeekMeal };
