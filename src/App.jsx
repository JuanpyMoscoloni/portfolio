import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import "./styles/styles.scss";
import { Technologies } from "./pages/Technologies";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import Background from "./components/Background";



function App() {
  return (
    <>
    <div>
      <Background/>
      <Navbar />
      <Home />
      <Works/>
      <Technologies/>
      <AboutMe/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
