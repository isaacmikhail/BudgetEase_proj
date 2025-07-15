import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isPopupVisible:false,
};

const popupSlice=createSlice({
    name:'popup',
    initialState,
    reducers:{
        showPopup(state){
            state.isPopupVisible=true;
        },
        hidePopup(state){
            state.isPopupVisible=false;
        },
        togglePopup(state){
            state.isPopupVisible=!state.isPopupVisible;
    },
},
});

export const{showPopup, hidePopup, togglePopup}=popupSlice.actions;
export default popupSlice.reducer;
