const Header = () => {
  return (
    <div className="container nav_bar">
      <a href="#" className="left nav_items">
        Portfolio
      </a>
      <div className="right">
        <a href="#home" className="nav_items">
          Home
        </a>
        <a href="#experience" className="nav_items">
          Experience
        </a>
        <a href="#skills" className="nav_items">
          Skills
        </a>
        <a href="#project" className="nav_items">
          Project
        </a>
        <a href="#contact" className="nav_items">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Header;
