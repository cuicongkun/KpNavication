import { useState } from "react";
import "./App.less";
import Navbar from "@/components/Navbar/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
