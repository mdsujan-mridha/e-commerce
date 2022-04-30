import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import NotFound from './Components/NotFound/NotFound';
import ServicesDetils from './Components/ServicesDetils/ServicesDetils';
import Register from './Components/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import AddServices from './Components/AddServices/AddServices';
import Procced from './Components/Procced/Procced';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServicesDetils></ServicesDetils>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/procced' element={
          <RequireAuth>  
          
            <Procced></Procced>
             </RequireAuth>
        } 
        ></Route>

        <Route path='/addservices' element={
          <RequireAuth>  
           <AddServices></AddServices>
            
             </RequireAuth>
        } 
        ></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
