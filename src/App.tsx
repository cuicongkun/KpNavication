import "./App.less";
import { useState, useRef, SetStateAction } from "react";
import LayoutNavigation from "@/layout/navigation";
import Navbar from "@/components/Navbar/index";
import Linklist from "@/components/Linklist/index";

import { navigation } from "../mock";

function App() {
  const [currentBarIndex, setCurrentBarIndex] = useState(0);
  const navBarOk = (index: SetStateAction<number>) => {
    setCurrentBarIndex(index);
  };
  return (
    <div className="App">
      <LayoutNavigation
        navbar={
          <Navbar
            bars={navigation}
            barsIndex={currentBarIndex}
            navBarOk={navBarOk}
          />
        }
        linklist={<Linklist list={navigation} barsIndex={currentBarIndex} />}
      />
    </div>
  );
}

export default App;
