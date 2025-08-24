import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddOn } from '../redux/addOnsSlice';
import '../styles/addOnsSlice.css'

const AddOn =()=>{
    const addOns = useSelector(state => state.addOns);
    const dispatch = useDispatch();

    return(
        <div className='add-on-container'>
            <h2>Select Add-Ons</h2>
            <ul className='add-on-list'>
                {addOns.map(addOn=>(<li key={addOn.id} className={addOn.selected ? 'selected' : ''}>
            <button onClick={() => dispatch(toggleAddOn(addOn.id))}>
              {addOn.name} – ${addOn.price}
              {addOn.selected && ' ✅'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default AddOn;
