import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import MySelf from './pages/Myself';
import MyIntro from './pages/자기소개서';

import './styles/header.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MySelf/>} />
      <Route path={'/project'} element={<Project/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
