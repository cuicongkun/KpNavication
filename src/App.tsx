import "./App.less";
import LayoutNavigation from "@/layout/navigation";
import Navbar from "@/components/Navbar/index";
import Linklist from "@/components/Linklist/index";

import { navigation } from "../mock";

function App() {
  return (
    <div className="App">
      <LayoutNavigation
        navbar={<Navbar bars={navigation} />}
        linklist={<Linklist list={navigation} />}
      />
    </div>
  );
}

export default App;
