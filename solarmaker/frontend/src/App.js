import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import MainPage from "./component/pages/MainPage"
import Project from "./component/register/Project";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/NewProject" element={<Project />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
