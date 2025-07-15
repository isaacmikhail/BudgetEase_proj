import {createSlice} from '@reduxjs/toolkit';

const initialState={
    selectedAddOns: [],
    addOns:[
        {id:'microphone', name:'Micropone', price:60},
        {id:'projector', name:'Projector', price:100},
        {id:'greaseboard', name:'Greaseboard', price: 30},
    ],
};

const addOnsSlice=createSlice({
    name:'addOns',
    initialState,
    reducers:{
        toggleAddOn(state,action){
            const addOnId=action.payload;
            const isSelected=state.selectedAddOns.includes(addOnId);

            if (isSelected){
                state.selectedAddOns = state.selectedAddOns.filter(id => id !== addOnId);
            }else{
                state.selectedAddOns.push(addOnId);
            }
        },
        clearAddOns(state){
            state.selectedAddOns=[];
        },
    },
});

export const{toggleAddOn, clearAddOns}= addOnsSlice.actions;
export default addOnsSlice.reducer;