import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

export const Header = () => {

  const [btnName, setBtnName] = useState('Login')
  useEffect(() => {
    console.log('useEffect rendered')
}, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
                btnName === 'Login' ?
              setBtnName('Logout') : setBtnName('Login')
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
