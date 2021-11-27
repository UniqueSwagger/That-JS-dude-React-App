import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Jsconcepts from "./Components/Jsconcepts/Jsconcepts";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="row">
        <Jsconcepts></Jsconcepts>
        <Sidebar></Sidebar>
      </div>
      <hr />
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
