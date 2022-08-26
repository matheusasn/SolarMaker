import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MainPage from "./component/pages/MainPage"
import Project from "./component/register/Project";
import Login from "./component/pages/Login";
import Client from "./component/pages/Client";
import useToken from "./useToken";
import User from "./component/register/User";
import Users from "./component/pages/users";
import TableProject from "./component/pages/TableProject";
import { ToastContainer } from 'react-toastify';
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';
import "react-notifications-component/dist/theme.css";
import "./App.css"

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/NewProject" element={<Project />} />
          <Route path="/NewUser" element={<User />} />
          <Route path="/Client" element={<Client />} /> 
          <Route path="/Users" element={<Users />} />
          <Route path="/Projects" element={<TableProject />} />          
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
