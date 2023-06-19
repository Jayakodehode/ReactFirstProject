import "./StyleNavbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p className="logo">Logo</p>
      </div>
      {
        /**
         * multiline comments
         */
        //single line comments
      }
      <div className="navbar-items">
        <ul className="navbar-list">
          <li className="listitems">
            <a href=""> Home</a>
          </li>
          <li className="listitems">
            <a href="">About</a>
          </li>
          <li className="listitems">
            <a href="">Projects</a>
          </li>
          <li className="listitems">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
