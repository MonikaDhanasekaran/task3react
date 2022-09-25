import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Button from './Components/Button';
import Card from './Components/Card';
import UtilitiesColor from './Components/Utilities-color';
import UtilitiesBorder from './Components/Utilities-border';
import UtilitiesAnimation from './Components/Utilities-animation';
import UtilitiesOther from './Components/Utilities-other';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import Errorpage from './Components/Errorpage';
import Blank from './Components/Blank';
import Chart from './Components/Chart';
import Table from './Components/Table';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/button' element={ <Button /> } />
        <Route path='/card' element={ <Card /> } />
        <Route path='/utilitiescolor' element={ <UtilitiesColor /> } />
        <Route path='/utilitiesborder' element={ <UtilitiesBorder /> } />
        <Route path='/utilitiesanimation' element={ <UtilitiesAnimation /> } />
        <Route path='/utilitiesother' element={ <UtilitiesOther /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/forgetpassword' element={ <ForgetPassword /> } />
        <Route path='/errorpage' element={ <Errorpage /> } />
        <Route path='/blank' element={ <Blank /> } />
        <Route path='/chart' element={ <Chart /> } />
        <Route path='/table' element={ <Table /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;