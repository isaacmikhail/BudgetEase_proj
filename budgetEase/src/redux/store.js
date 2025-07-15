import { configureStore } from "@reduxjs/toolkit";
import venueReducer from './venueSlice';
import addOnsReducer from './addOnsSlice';
import mealReducer from './mealSlice';
import popupReducer from './popupSlice';

const store =configureStore({
    reducer:{
        venue:venueReducer,
        addOns:addOnsReducer,
        meal:mealReducer,
        popup:popupReducer,
    },
});

export default store;