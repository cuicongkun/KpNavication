import "./index.less";
import { NavigationType } from "@/types";

import { useState } from "react";

function Navbar(props: { bars: NavigationType }) {
  const { bars } = props;
  const [current, setCurrent] = useState(0);
  let count = 0;
  const listItems = bars.map((item, index) => {
    const itemCount = Array.isArray(item.children) ? item.children.length : 0;
    count += itemCount;
    return (
      <div key={item.id} className="item">
        <a
          className={current == index ? "active" : ""}
          href={`#${item.id}`}
          onClick={() => setCurrent(index)}
        >{`${item.navName}(${itemCount})`}</a>
      </div>
    );
  });
  return (
    <div className="navbar">
      <div className="navbar-main">
        <div className="navbar-title">哥，您收藏的宝贝，有{count}个了</div>
        {listItems}
      </div>
    </div>
  );
}
export default Navbar;
