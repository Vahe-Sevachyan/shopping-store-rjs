import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
