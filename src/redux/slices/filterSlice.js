import { createSlice } from "@reduxjs/toolkit";

const initialState = {       
    exercises:[]
};


const filterSlice = createSlice({
  name: 'fiters',
  initialState,  
  reducers: {   
    setExercises(state, action) {
      state.exercises = action.payload;
    } 
  }

});
export const { setExercises } = filterSlice.actions;

export default filterSlice.reducer;