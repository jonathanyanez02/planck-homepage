import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="plancklogo-icon" alt="" src="/plancklogo.svg" />
      <div className="navlinks">
        <div className="installationbutton">
          <b className="installation">Installation</b>
          <div className="icon">
            <img className="vector-icon4" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="developersbutton">
          <b className="installation">Developers</b>
          <div className="icon">
            <img className="vector-icon4" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="communitybutton">
          <b className="installation">Community</b>
          <div className="icon">
            <img className="vector-icon4" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
