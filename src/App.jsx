import React from 'react'
import { Home } from './Pages';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components';


function App() {
  return (
    <div>
      <Routes>
        <Route path='' >
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
