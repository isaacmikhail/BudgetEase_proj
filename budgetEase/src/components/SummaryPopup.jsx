import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopup } from '../redux/popupSlice';
import '../styles/SummaryPopup.css';


const SummaryPopup = () => {
  const dispatch = useDispatch();

  const selectedVenue = useSelector(state => state.venue.selectedVenue);
  const addOns = useSelector(state => state.addOns);
  const meal = useSelector(state => state.meal);
  const isVisible = useSelector(state => state.popup.isPopupVisible);
    if (!isVisible) return null;

  const venueCost = selectedVenue ? selectedVenue.price : 0;
  const selectedAddOns = addOns.addOns.filter(addOn => addOns.selectedAddOns.includes(addOn.id));
  const addOnCost = selectedAddOns.reduce((total, item) => total + item.price, 0);
  const mealCost = meal.selectedMeal ? meal.selectedMeal.price * meal.guestCount : 0;
  const totalCost = venueCost + addOnCost + mealCost;

  return (
    <div className="summary-popup">
      <div className="popup-content">
        <h2>Summary</h2>
        <div className="section">
          <h3>Venue</h3>
          {selectedVenue ? (
            <p>{selectedVenue.name} — R${venueCost.toFixed(2)}</p>
          ) : (
            <p>No Place Selected</p>
          )}
        </div>
        <div className="section">
          <h3>Add-ons</h3>
          {selectedAddOns.length > 0 ? (
            <ul>
              {selectedAddOns.map(item => (
                <li key={item.id}>{item.name} — R${item.price.toFixed(2)}</li>
              ))}
            </ul>
          ) : (
            <p>No add-on selected</p>
          )}
        </div>
        <div className="section">
          <h3>Meal</h3>
          {meal.selectedMeal ? (
            <p>
              {meal.selectedMeal.name} × {meal.guestCount} convidados — R${mealCost.toFixed(2)}
            </p>
          ) : (
            <p>No meal selected</p>
          )}
        </div>
        <div className="section total">
          <h3>Total: R${totalCost.toFixed(2)}</h3>
        </div>
        <button onClick={() => dispatch(hidePopup())}>Fechar</button>
      </div>
    </div>
  );


}
export default SummaryPopup;
