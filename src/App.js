import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';
import { CartProvider } from './components/storage/cartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
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
              path='/checkout' 
              element={<CheckoutContainer />}
            />
            <Route path='/about' 
              element={<AboutPage />}
            />
            <Route 
              path='*' 
              element={ <h4>asdasd</h4> }
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>      
    </>
  );
}

export default App;
