import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { useHomePath } from "../../utils/useHomePath";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect rendered");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  const goHome = useHomePath();

  return (
    <div className="flex justify-between shadow-lg bg-pink-50">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} onClick={goHome}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4"> Online Stauts: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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
