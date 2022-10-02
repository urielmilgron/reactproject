import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


const Welcome = (props) => {
return <h1>Hola! {props.name}, tenés {props.edad}</h1>
}
function App() {
  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;
