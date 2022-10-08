import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//App no tiene lógica, solo renderiza los componentes
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje="Home"/>
    </>
  );
}

export default App;
