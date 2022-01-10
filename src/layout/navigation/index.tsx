import "./index.less";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactChild } from "react";

function LayoutNavigation(props: { navbar: ReactChild; linklist: ReactChild }) {
  return (
    <div className="layout-navigation">
      <Header />
      <div className="container">
        <div className="navbar">{props.navbar}</div>
        <div className="main">
          {props.linklist}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LayoutNavigation;
