import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MainPage from "./component/pages/MainPage"
import FormProject from "./component/pages/project/FormProject";
import Login from "./component/pages/login/Login";
import Clients from "./component/pages/client/Clients";
import useToken from "./useToken";
import useUsers from "./useUsers";
import FormUser from "./component/pages/users/FormUser";
import Users from "./component/pages/users/users";
import Projects from "./component/pages/project/Projects";
import FormClient from "./component/pages/client/FormClient";
import { ToastContainer } from 'react-toastify';
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';
import "react-notifications-component/dist/theme.css";
import "./App.css"

function App() {
  const { token, setToken } = useToken();
  const { user } = useUsers();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <Router>
        <Header typeUser={user}></Header>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Projects" element={<Projects />} />          
          <Route path="/FormProject" element={<FormProject />} />
          <Route path="/Clients" element={<Clients />} /> 
          <Route path="/FormClient" element={<FormClient />} />
          <Route path={user === true ? "/Users" : null} element={user === true ? <Users /> : null} />
          <Route path={user === true ? "/FormUser" : null} element={user === true ? <FormUser /> : null}/>
          <Route path={user === true ? "/FormUser/edit" : null} element={user === true ? <FormUser /> : null}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
