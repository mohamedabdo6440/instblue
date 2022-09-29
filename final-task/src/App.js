import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Categores from "./components/categores/Categores";
import Body from "./components/Body";
import SinglePost from "./components/Singlepost";
import './components/Allstyle.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const categores = ["Poltics", "Accidents", "Sports", "Alerts", "Health", "Reports", "Courses"];

  const path = categores.map((p) => {
    return p;
  })

  console.log(window.location);


  return (
    <div className="App">

      <BrowserRouter>
        <Navbar categores={categores} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/single/:id" element={<SinglePost />} />

          {
            categores.map((p) => {
              return <Route path={`${p}/`} element={<Categores categores={categores} path={path} />} />
            })
          }
        </Routes>
        <Footer />

      </BrowserRouter>



    </div>
  );
}

export default App;

