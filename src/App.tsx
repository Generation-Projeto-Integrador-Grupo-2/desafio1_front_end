import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNos from './pages/SobreNos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
