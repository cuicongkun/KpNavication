import "./index.less";
import { NavigationType } from "@/types";

interface NavBarComponentType {
  bars: NavigationType;
  barsIndex: number;
  navBarOk: (index: number) => void;
}
function Navbar(props: NavBarComponentType) {
  const { bars, barsIndex, navBarOk } = props;
  const navBarTap = (index: number) => {
    return () => {
      navBarOk(index);
    };
  };
  let count = 0;
  const listItems = bars.map((item, index) => {
    const itemCount = Array.isArray(item.children) ? item.children.length : 0;
    count += itemCount;
    return (
      <div key={item.id} className="item">
        <a
          className={barsIndex == index ? "active" : ""}
          href={`#${item.id}`}
          onClick={navBarTap(index)}
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
