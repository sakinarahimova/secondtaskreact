
import './App.css';
import {Routes , Route , Link , NavLink} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import WorkInstances from './Components/WorkInstances';
function App() {
  return (
    <div className="App">
      <div className='menu-bar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        <NavLink to={'/workinstances'}>Work Instances</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/workinstances' element={<WorkInstances />} />
      </Routes>
    </div>
  );
}

export default App;
