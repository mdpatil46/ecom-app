import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Categories from './components/Categories';
import LoginForm from './components/LoginForm';
import Shope from './components/Shope';
import NoteState from './context/note/NoteState';
// import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IphoneIMG from './components/IphoneIMG';
import Signin from './components/Signin';
import Addcart from './components/Addcart';


function App(props) {
  const a = {name:"Govinda",
  age:23,
  Occupation:"WebDevloper",
shope :"Apple Store"}

  return (
    <>
    <NoteState>
        <Router>
          <Navbar b={a.shope} />
          <Routes>
            <Route index element={<IphoneIMG/>}/>
            <Route  path="/IphoneIMG" element={<IphoneIMG/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Shope" element={<Shope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Addcart' element={<Addcart/>}/>
          </Routes>
        </Router>
    </NoteState>
      
    </>
  );
}

export default App;
