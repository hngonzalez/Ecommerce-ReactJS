import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />

          <Route 
            path='/home' 
            element={<Home />}
          />
          <Route 
            path='/category/:ItemCategory' 
            element={<ItemListContainer />}
          />
          <Route 
            path='/about' 
            element={<ItemListContainer />}
          />
          <Route 
            path='/details/:itemId' 
            element={<ItemDetailContainer />}
          />
          <Route 
            path='*' 
            element={ <h4>asdasd</h4> }
          />
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
