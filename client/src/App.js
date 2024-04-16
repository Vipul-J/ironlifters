import { Routes, Route, BrowserRouter, matchRoutes } from "react-router-dom";
import './App.css';
import Home from "./pages/admin/Home";
import AddMember from "./pages/admin/AddMember";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/admin/addmember" element={<AddMember />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;