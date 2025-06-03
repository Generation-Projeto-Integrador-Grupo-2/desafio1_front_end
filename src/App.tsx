import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Funcionarios from './pages/Funcionarios';
import Sidebar from './components/sidebar/Sidebar';
import SobreNos from './pages/SobreNos';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavBar';
import Home from './components/home/Home';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>

        {/* Main content with padding-top for fixed navbar */}
        <div className="flex-1 pt-16"> {/* Adjust pt-16 based on your navbar height */}
          <Routes>
            <Route
              path="/funcionarios"
              element={
                <div className="flex min-h-[calc(100vh-4rem)]"> {/* Subtract navbar height */}
                  <Sidebar />
                  <main className="flex-1 overflow-auto">
                    <Funcionarios />
                  </main>
                </div>
              }
            />
            <Route
              path="/sobre"
              element={
                <main className="min-h-[calc(100vh-4rem)]">
                  <SobreNos />
                </main>
              }
            />
            <Route
              path="/"
              element={
                <main className="min-h-[calc(100vh-4rem)]">
                  <Home />
                </main>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
