import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './Component/AboutMe/Info';
import Contact from './Component/ContactMe/Contact';
import Foot from './Component/Footer/Footer';
import Profile from './Component/Home/Profile';
import MyWork from './Component/Intrests/MyWork';
import Navmenu from './Navmenu';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    
    <Navmenu/>
    
    <Info/>
    <MyWork/>
    <Contact/>
    <Foot/> 
    </>
   
  );
}

export default App;
