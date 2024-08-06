import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/App.css';

import Home from './components/Home';
import Dashboard from './components/dashboard/Main/Dashboard';
import Support from './components/pages/Support/Support';
import About from './components/pages/About/About';
import BecomeADriver from './components/pages/Become/BecomeADriver';
import Terms from './components/pages/Terms/Terms';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
      <Route index element={<Home/>} exact/>
      <Route path = "support" element={<Support/>} exact />
      <Route path = "about" element={<About/>} exact />
      <Route path = "become_a_driver" element={<BecomeADriver/>} exact />
      <Route path = "terms_and_conditions" element={<Terms/>} exact />
      <Route path = "dashboard" element={<Dashboard/>} exact />
      {/* <Route path = "*" element={<Unknown/>} exact /> */}
      

    </Routes>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
