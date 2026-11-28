import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conductor from "./pages/VehiculosConductores";
import Admin from "./pages/SAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Conductor/>} />
        <Route path="/SAdmin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;