import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Body from "./components/Body";
import SinglePost from "./components/Singlepost";
import './components/Allstyle.css';
import './components/ScriptJquery'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/single/:id" element={<SinglePost />} />
        </Routes>
        <Footer />

      </BrowserRouter>



    </div>
  );
}

export default App;
