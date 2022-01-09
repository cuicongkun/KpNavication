import './index.less'
import { NavigationType } from "@/types";
function Navbar(props: { bars: NavigationType }) {
  const { bars } = props;
  const listItems = bars.map((item) => (
    <li key={item.id}><a href={`#${item.id}`}>{item.navName}</a></li>
  ));
  return (
    <div className="navbar">
      <div className="navbar-height"></div>
      <div className="navbar-main">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
export default Navbar;
