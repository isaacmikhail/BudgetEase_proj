/*This slice will
    store the selected venue
    include pricing for each venue option
    allow updates when a user makes a selection
*/

import {createSlice} from '@reduxjs/toolkit';

const initialState={
    selectedVenue:null,
    venues:[
        {id:'mainHall', name:'Main Hall', price:500},
        {id:'confRoomA', name:'Conference Room A', price:300},
        {id:'outdoorSpace', name: 'Outdoor Space', price:400},
    ],
};

const venueSlice=createSlice({
    name:'venue',
    initialState,
    reducers:{
        selectVenue(state, action){
            state.selectedVenue=state.venues.find(venue=>venue.id===action.payload)||null;
        },
        clearVenue(state){
            state.selectedVenue=null;
        },
    },
});

export const{selectVenue,clearVenue}=venueSlice.actions;
export default venueSlice.reducer;