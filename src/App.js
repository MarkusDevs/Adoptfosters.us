import './App.css';
import { Wrapper } from './pages/Wrapper';
import {Home} from "./pages/Home";
import {Adopt} from "./pages/Adopt"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Account} from "./pages/Account"
import { Route, Routes } from 'react-router-dom';
import { Footer } from './pages/Footer';
// import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <>
      <Wrapper/>
      <div>
        

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/adopt' element={<Adopt/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
