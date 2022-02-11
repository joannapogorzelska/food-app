import { Routes, Route } from 'react-router-dom'

import AddNewRecepies from './pages/AddNewRecepies'
import Favourites from './pages/Favourites'
import Navigation from './layout/Navigation'
import Recepies from './pages/Recepies'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Recepies />}/>
        <Route path='/add-new-recepies' element={<AddNewRecepies />}/>
        <Route path='/fav' element={<Favourites />}/>
      </Routes>
      
      
      

    </div>
  );
}

export default App;
