import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.js';
import MainLayout from './layout/main';
import Error404 from './pages/error/index.js';
import {AboutPage} from "./pages/about";

function App() {
  return (
    <Routes>
      {/* MainLayout sẽ có Header cho tất cả các route con */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* Route này sẽ không có Header */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
