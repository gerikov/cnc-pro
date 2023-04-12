import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import UvNyomtatas from './pages/Uv-nyomtatas';
import Home from './pages/Home';
import Szerviz from './pages/Szerviz';
import Kapcsolat from './pages/Kapcsolat';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='uv-nyomtatas' element={<UvNyomtatas />} />
        <Route path='szerviz' element={<Szerviz />} />
        <Route path='kapcsolat' element={<Kapcsolat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
