import './App.css';
import InsuranceApplication from './pages/InsuranceApplication';
import InsuranceForms from './pages/InsuranceForms';
import OfferPage from './pages/Offer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InsuranceApplication/>}/>
        <Route path="/resume" element={<InsuranceForms/>}/>
        <Route path="/offer" element={<OfferPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
