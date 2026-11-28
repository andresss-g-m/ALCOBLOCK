import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conductor from "./pages/VehiculosConductores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Conductor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
