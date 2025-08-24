import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/VenueSelector.css'
import SummaryPopup from './components/SummaryPopup';
import VenueSelector from './components/VenueSelector';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VenueSelector />
    {/* <VenueSelector /> */}


      
    </>
  )
}

export default App
