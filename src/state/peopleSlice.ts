import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "../Interfaces";

const initialState: IList = {
  people: [
    {
      id: 1,
      name: "LeBron James",
      age: 35,
      avatar: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      description: "Allegeric to staying on the same team"
    },
    {
      id: 2,
      name: "Alex",
      age: 29,
      avatar:
        "https://pbs.twimg.com/profile_images/1319894091816194048/q2BGWMwJ_400x400.jpg"
    }
  ]
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<IList["people"]>) => {
      state.people = action.payload;
    },
    removePerson: (state, action: PayloadAction<number>) => {
      state.people = state.people.filter((p) => p.id !== action.payload);
    }
  }
});

export const { addPerson, removePerson } = peopleSlice.actions;

export default peopleSlice.reducer;
