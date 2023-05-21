import FrontPage from "./bodycontent/FrontPage";
import { Navigate, Route,Routes } from "react-router";
import Loginpage from "./bodycontent/Loginpage";
import AdminrRegister from "./bodycontent/AdminrRegister";
import AdminPage from "./bodycontent/AdminPage";
import Form from "./bodycontent/Form";
import Navbar from "./bodycontent/Navbar";
import { useSelector } from "react-redux";
function App() {
  const isAdminAuth = useSelector((state)=> state.auth.isAdminAuthenticated);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />}/>
      <Route path="/home" element={<FrontPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/adminregister" element={<AdminrRegister />} />
      {isAdminAuth && <Route path="/admin" element={<AdminPage />} />}
      <Route path="/servey" element={<Form />} />
    </Routes>
    </>
  );
}

export default App;
