import "./index.less";
import { NavigationType } from "@/types";
function ChildrenItem(props: any) {
  const { thisChildren } = props;
  if (Array.isArray(thisChildren)) {
    const Temp = thisChildren.map((item, index) => {
      return (
        <div
          key={index}
          className="block-children-item"
          onClick={() => {
            window.open(item.url);
          }}
        >
          <div className="view">
            {(item.logo ?? "" != "") && (
              <img src={item.logo} alt={item.siteName} />
            )}
            <h3>{item.siteName}</h3>
            <span className="version-tip">{item.version}</span>
          </div>
          <div className="intro">{item.desc}</div>
        </div>
      );
    });
    return <div className="block-childern">{Temp}</div>;
  } else {
    return <div></div>;
  }
}
function LinkGroup(props: any) {
  const { item, index, barsIndex } = props;
  return (
    <div className={barsIndex == index ? "block active" : "block"}>
      <h2 id={item.id} className="block-name">
        {item.navName}
      </h2>
      <ChildrenItem thisChildren={item.children} />
    </div>
  );
}
function Linklist(props: { list: NavigationType; barsIndex: number }) {
  const { list, barsIndex } = props;
  const listItems = list.map((item, index) => {
    return (
      <LinkGroup
        key={item.id}
        item={item}
        index={index}
        barsIndex={barsIndex}
      />
    );
  });
  return <div className="link-list">{listItems}</div>;
}
export default Linklist;
