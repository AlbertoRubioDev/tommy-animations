import "./Navbar.css";
import logo from "../../assets/images/logo2.png";
import bag from "../../assets/icons/bag.svg";
import magnifier from "../../assets/icons/magnifier.svg";

function Link ({name}) {
  return (
    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{name}</a>
  )
}


function Navbar() {
    return (
      <>
      <div className="container-upper-bar">
        <div className="upper-bar">
          <div className="left-menu">
            <a>UK/GBP(£)</a>
            <span>|</span>
            <a>STORES</a>
            <span>|</span>
            <a>CUSTOMER SERVICE</a>
            </div>
          <div className="center-menu">
            <div className="times-text">Enjoy free delivery on all orders over £50</div>
          </div> 
          <div className="right-menu">
            <a>NEWSLETTER SIGN UP</a>
            <span>|</span>
            <a>SIGN IN/REGISTER</a>
            <span></span>
            <img src={bag} alt="Bag" width="13" height="13"/>
          </div> 
        </div>
      </div>

      <div className="container-topnav">
          <div className="topnav">
              <div style={{backgroundImage: `url(${logo})`}} className="tommy-logo"></div>
            <div className="center-menu">
              <div className="nav-menu">
                <Link name="women">women</Link>
                <Link name="men">men</Link>
                <Link name="kids">kids</Link>
                <Link name="labels">labels</Link>
                <Link name="sale">sale</Link>
              </div> 
            </div>
            <div className="right-menu">
              <input placeholder="Search" />
              <img src={magnifier} alt="Search" width="16" height="16"/>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Navbar;
  