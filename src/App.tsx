import "./App.less";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "@/components/Navbar/index";
import Linklist from "@/components/Linklist/index";

import { navigation } from "./mock";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="navbar">
          <Navbar bars={navigation} />
        </div>
        <div className="main">
          <Linklist list={navigation} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
