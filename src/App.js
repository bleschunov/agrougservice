import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Warehouses from './pages/Warehouses';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="warehouses" element={<Warehouses />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
