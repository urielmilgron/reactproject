import './App.css';
import ItemNoticeContainer from './components/ItemNoticeContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Index/>}/>
    <Route exact path="/lastnews" element={<ItemNoticeContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
