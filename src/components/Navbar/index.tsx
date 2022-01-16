import "./index.less";
import { NavigationType } from "@/types";

interface NavBarComponentType {
  bars: NavigationType;
  barsIndex: number;
  navBarOk: (index: number) => void;
}
function Navbar(props: NavBarComponentType) {
  const { bars, barsIndex, navBarOk } = props;
  const barsKey = Object.keys(bars)
  const navBarTap = (index: number) => {
    return () => {
      navBarOk(index);
    };
  };
  let count = 0;
  const listItems = barsKey.map((item, index) => {
    const itemCount = bars[item].length;
    count += itemCount;
    return (
      <div key={index} className="item">
        <a
          className={barsIndex == index ? "active" : ""}
          href={`#${item}`}
          onClick={navBarTap(index)}
        >{`${item}(${itemCount})`}</a>
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
