import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Clients from './Pages/Clients/Clients.jsx'
import Contact from './Pages/Contact/Contact.jsx'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 

        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/clients' element={<Clients />}/>
        <Route path='/contact' element={<Contact />}/>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
