import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import Header from './pages/HeaderPage';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Header/>} />
  </Routes>
    <Routes>
      <Route path={'/'} element={<Main/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
