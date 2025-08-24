import {createSlice} from '@reduxjs/toolkit';

const initialState={
    selectedMeal:null,
    guestCount:0,
    mealOptions:[
        {id:'standard', name:'Standard Meal', pricePerGuest:20},
        {id:'premium', name:'Premium Meal', pricePerGuest:35},
        {id:'vegeterian',name:'Vegeterian Meal', pricePerGuest:25},
    ],
};

const mealSlice=createSlice({
    name:'meal',
    initialState,
    reducers:{
        selectedMeal(state,action){
            state.selectedMeal=state.mealOptions.find(meal=>meal.id===action.payload)||null;
        },
        setGuestCount(state,action){
            state.guestCount=action.payload;
        },
        clearMeal(state){
            state.selectedMeal=null;
            state.guestCount=0;
        },
    },
});

export const {selectMeal, setGuestCount, clearMeal}=mealSlice.actions;
export default mealSlice.reducer;