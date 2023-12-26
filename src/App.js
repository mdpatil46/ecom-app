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
import Allinone from './components/Allinone';


function App() {
  
  return (
    <>
   
        <Router>
          <Navbar/>
          <Routes>
            <Route index element={<IphoneIMG/>}/>
            <Route  path="/IphoneIMG" element={<IphoneIMG/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Mac" element={<Mac/>}/> 
            <Route path="/Ipad" element={<Ipad/>}/> 
            <Route path="/Iphone" element={<Iphone/>}/> 
            <Route path="/Watch" element={<Watch/>}/> 
            <Route path="/Shope" element={<Shope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Addcart' element={<Addcart/>}/>
            <Route path='/Allinone' element={<Allinone/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
