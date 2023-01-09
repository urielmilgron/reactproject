import './App.css';
import ItemNoticeContainer from './components/ItemNoticeContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Index/>}/>
    <Route exact path="/lastnews" element={<ItemNoticeContainer/>}/>
    <Route path="/notice/:id" element={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
