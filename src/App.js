
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Elements/Aboutus';
import Contact from './Components/Elements/Contact';
import DashBoard from './Components/Elements/DashBoard';
import Shortcuts from './Components/Elements/Shortcuts';

import Login from './Components/Login';


import SideNav2 from './Components/SideNav2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
      <Routes>
     
        <Route path='/' element={<Login/>}/>
       
        <Route path='/mainpage' element={<SideNav2/>}>
          <Route path='' element={<DashBoard/>}/>
            <Route path='dashboard' element={<DashBoard/>}/>
            <Route path='about' element={<Aboutus/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='shortcut' element={<Shortcuts/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

      {/* <Data/> */}

   
    </div>
  );
}

export default App;
