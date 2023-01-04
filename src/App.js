// import './App.css';
import Home from './components/Home';
import Navigation from './components/Navbar/Navigation';
import SideBar from './components/Sidebar/SideBar';
import { Link, Route, Routes } from 'react-router-dom';
import UnNavbar from './components/Sidebar/UnNavbar';
function App() {
  return (
    <>
      <Link index="true" to="/" />
      
      <Routes>
        <Route index exact path="/" element={<Home />}/>
        <Route index exact path="/navbar" element={<Navigation />}/>
        <Route index exact path="/unacademy_navbar" element={<UnNavbar />}/>
        <Route index exact path="/sidebar" element={<SideBar />}/>
      </Routes>
      
    </>
  );
}

export default App;


/* 

npm install -D tailwindcss
npx tailwindcss init

*/