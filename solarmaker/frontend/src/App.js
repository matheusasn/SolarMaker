import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MainPage from "./component/pages/MainPage"
import Project from "./component/register/Project";
<<<<<<< Updated upstream
import Login from "./component/pages/Login";
import useToken from "./useToken";
=======
import User from "./component/register/User";
>>>>>>> Stashed changes
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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/NewProject" element={<Project />} />
          <Route path="/NewUser" element={<User />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
