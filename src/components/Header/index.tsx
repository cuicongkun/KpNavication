import "./index.less";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="码大厨的珍宝" />
        <h1>码大厨的珍宝</h1>
      </div>
      <div className="header-nav">
        <ul>
          <li><a href="">回到博客</a></li>
          <li><a href="https://github.com/cuicongkun/navigation" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
