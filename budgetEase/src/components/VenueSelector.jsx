import {useDispatch, useSelector} from 'react-redux';
import{selectVenue} from '../redux/venueSlice';

const VenueSelector=()=>{
    const dispatch=useDispatch();
    const venues=useSelector(state=>state.vevnue.venues);
    const selectedVenue=useSelector(state=>state.venue.selectedVenue);
    const handleSelect=(id)=>{
        dispatch(selectVenue(id));
    };

    return(
        <div>
            <h2>Select a Venue</h2>
            <ul>
                {venues.map(venue=>(
                    <li key={venue.id}>
                        <button onClick={()=>handleSelect(venue.id)} disabled={selectedVenue?.id===venue.id}>
                            {venue.name}-${venue.price}
                            {selectedVenue?.id===venue.id && '✅'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VenueSelector;