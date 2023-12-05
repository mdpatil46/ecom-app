import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Categories from './components/Categories';
import LoginForm from './components/LoginForm';
import Shope from './components/Shope';
// import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IphoneIMG from './components/IphoneIMG';
import Signin from './components/Signin';
import Addcart from './components/Addcart';
import Mac from './components/Mac';
import Ipad from './components/Ipad';
import Iphone from './components/Iphone';
import Watch from './components/Watch';


function App() {
  
  return (
    <>
   
        <Router>
          <Navbar/>
          <Routes>
            <Route index element={<IphoneIMG/>}/>
            <Route  path="/IphoneIMG" element={<IphoneIMG/>}/>
            <Route path="/Home" element={<Home />} />
            <Route psth="/Mac" element={<Mac/>}/> 
            <Route psth="/Ipad" element={<Ipad/>}/> 
            <Route psth="/Iphone" element={<Iphone/>}/> 
            <Route psth="/Watch" element={<Watch/>}/> 
            <Route path="/Shope" element={<Shope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Addcart' element={<Addcart/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
