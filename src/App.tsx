import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Funcionarios from './pages/Funcionarios';
import Sidebar from './components/sidebar/Sidebar';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/funcionarios"
            element={
              <div className="flex">
                <Sidebar />
                <main className="flex-1">
                  <Funcionarios />
                </main>
              </div>
            }
          />
          <Route path="/" element={<div></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
