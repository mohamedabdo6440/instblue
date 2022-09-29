import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Poltics from "./components/categores/Poltics";
import Courses from "./components/categores/Courses";
import Sports from "./components/categores/Sports";
import Body from "./components/Body";
import SinglePost from "./components/Singlepost";
import './components/Allstyle.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const categores = ["Poltics", "Sports", "Courses"];

  const path = categores.map((p) => {
    return p;
  })




  return (
    <div className="App">

      <BrowserRouter>
        <Navbar categores={categores} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/single/:id" element={<SinglePost />} />

          <Route path="Poltics" element={<Poltics />} />

          <Route path="Sports" element={<Sports />} />
          <Route path="Courses" element={<Courses />} />
        </Routes>
        <Footer />

      </BrowserRouter>



    </div>
  );
}

export default App;

