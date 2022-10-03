import './App.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:id' element={<ProductDetail />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
