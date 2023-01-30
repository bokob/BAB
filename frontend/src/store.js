import { configureStore, createSlice } from "@reduxjs/toolkit";

let mainbuildingWeekMeal = createSlice({
  name: "mainbuildingWeekMeal",
  initialState: [],
  reducers: {
    changeMainbuildingWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

let yangsungjaeWeekMeal = createSlice({
  name: "yangsungjaeWeekMeal",
  initialState: [],
  reducers: {
    changeYangsungjaeWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

let yangjinjaeWeekMeal = createSlice({
  name: "yangjinjaeWeekMeal",
  initialState: [],
  reducers: {
    changeYangjinjaeWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

let hanbitWeekMeal = createSlice({
  name: "hanbitWeekMeal",
  initialState: [],
  reducers: {
    changeHanbitWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

let starLightWeekMeal = createSlice({
  name: "starLightWeekMeal",
  initialState: [],
  reducers: {
    changeStarLightWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

let milkywayWeekMeal = createSlice({
  name: "milkywayWeekMeal",
  initialState: [],
  reducers: {
    changeMilkywayWeekMeal(state, action) {
      state.push(action.payload);
    },
  },
});

export let { changeMainbuildingWeekMeal } = mainbuildingWeekMeal.actions;
export let { changeYangsungjaeWeekMeal } = yangsungjaeWeekMeal.actions;
export let { changeYangjinjaeWeekMeal } = yangjinjaeWeekMeal.actions;
export let { changeHanbitWeekMeal } = hanbitWeekMeal.actions;
export let { changeStarLightWeekMeal } = starLightWeekMeal.actions;
export let { changeMilkywayWeekMeal } = milkywayWeekMeal.actions;

export default configureStore({
  reducer: {
    mainbuildingWeekMeal: mainbuildingWeekMeal.reducer,
    yangsungjaeWeekMeal: yangsungjaeWeekMeal.reducer,
    yangjinjaeWeekMeal: yangjinjaeWeekMeal.reducer,
    hanbitWeekMeal: hanbitWeekMeal.reducer,
    starLightWeekMeal: starLightWeekMeal.reducer,
    milkywayWeekMeal: milkywayWeekMeal.reducer,
  },
});
