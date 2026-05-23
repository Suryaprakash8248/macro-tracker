
import './App.css';
import {Route, Routes} from "react-router";
import Homepage from './pages/Homepage';
import Createmacro from './pages/Createmacro';
import Updatemacro from './pages/Updatemacro';
import Loginuser from './pages/Loginuser';
import Registeruser from './pages/Registeruser';
import Settings from './pages/Settings';

function App() {
  return <div>

    <Routes>
      <Route path='/createmacro' element={<Createmacro />}/>
      <Route path="/updatemacro/:id" element={<Updatemacro />} />
      <Route path='/homepage' element={<Homepage />}/>
      <Route path='/' element={ <Loginuser />} />
      <Route path='/register' element={<Registeruser />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  </div>
}

export default App;
