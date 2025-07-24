import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Project from './pages/Project';
import MySelf from './pages/Myself';

import './styles/header.css';
import './styles/PageTransition.css';

function AnimatedRoutes() {
  const location = useLocation();
   const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<MySelf />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
