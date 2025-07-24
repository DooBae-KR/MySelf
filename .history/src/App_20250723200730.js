import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import Header from './pages/HeaderPage';
import MySelf from './pages/Myself';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<MySelf/>} />
  </Routes>

  </BrowserRouter>
  );
}

export default App;
