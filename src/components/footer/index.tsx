import "./index.less";
function Footer() {
  const COPY_RIGHT = `Copyright © 2021-${new Date().getFullYear()} 码大厨的藏宝阁`;
  return (
    <div className="footer">
      <p>{COPY_RIGHT}</p>
    </div>
  );
}
export default Footer;
