import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setGuestCount} from '../redux/mealSlice';
import '../styles/MealOptions.css';


const MealOptions=()=>{
    const dispatch=useDispatch();
    
    const selectedMeal=useSelector(state=>state.mela.selectedMeal);
    const guestCount=useSelector(state=>state.mela.guestCount);
    const mealOptions=useSelector(state=>state.meal.mealOptions);

    //it updates meal type
    const handleMealChange=(e)=>{
        dispatch(selectedMeal(e.target.value));
        };
    //it updates guest number
    const handleGuestCountChange=(e)=>{
        const count = parseInt(e.target.value,10);
        if (!isNaN(count) && count >= 1){
            dispatch(setGuestCount(count));
        }
    };
    return (
    <div className="meal-options-container">
      <h2>Pick a Meal 🍽️</h2>

      <label htmlFor="meal-select">Meal Type:</label>
      <select id="meal-select" value={selectedMeal} onChange={handleMealChange}>
        {mealOptions.map((meal) => (
          <option key={meal.name} value={meal.name}>
            {meal.name} - R${meal.price}
          </option>
        ))}
      </select>

      <label htmlFor="guest-count">Guest Numebr:</label>
      <input
        type="number"
        id="guest-count"
        value={guestCount}
        onChange={handleGuestCountChange}
        min="1"
      />

      <p className="total-cost">
        Total: R${guestCount * (mealOptions.find(m => m.name === selectedMeal)?.price || 0)}
      </p>
    </div>
  );


};
export default MealOptions;
