import { Routes, Route, BrowserRouter, matchRoutes } from "react-router-dom";
import './App.css';
import Home from "./pages/admin/Home";
import AddMember from "./pages/admin/AddMember";
 import PackageForm from "./pages/admin/backoffice/PackageForm";
import AllPackages from "./pages/admin/backoffice/AllPackages";
import EditPackage from "./pages/admin/backoffice/EditPackage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/admin/addmember" element={<AddMember />} /> 
        <Route exact path="/admin/backoffice/packages" element={<AllPackages />} /> 
        <Route exact path="/admin/backoffice/packageform" element={<PackageForm />} /> 
        <Route exact path="/admin/backoffice/packageform/:id" element={<EditPackage />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;