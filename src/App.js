import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Landingpage from "./screens/Landing";
import Registation from "./screens/Registation";
import Doctor from "./screens/DoctorList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land" element={<Landingpage />} />
        <Route path="/login" element={<Registation />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
