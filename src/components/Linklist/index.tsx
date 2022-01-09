import "./index.less";
import { NavigationType } from "@/types";
function ChildrenItem(props: any) {
  const { thisChildren } = props;
  if (Array.isArray(thisChildren)) {
    const Temp = thisChildren.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} target="_blank">
            {item.siteName}
          </a>
        </li>
      );
    });
    return (
      <div>
        <ul>{Temp}</ul>
      </div>
    );
  } else {
    return <div></div>
  }
}
function LinkGroup(props: any) {
  const { item } = props;
  const COUNT: number = Array.isArray(item.children) ? item.children.length : 0;
  return (
    <div>
      <p id={item.id}>
        {item.navName}({COUNT})
      </p>
      <ChildrenItem thisChildren={item.children} />
    </div>
  );
}
function Linklist(props: { list: NavigationType }) {
  const { list } = props;
  const listItems = list.map((item) => {
    return (
      <li key={item.id}>
        <LinkGroup item={item} />
      </li>
    );
  });
  return (
    <div className="link-list">
      <div className="link-list-height"></div>
      <div className="link-list-main">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
export default Linklist;
