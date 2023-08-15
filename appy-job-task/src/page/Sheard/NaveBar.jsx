import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const NaveBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const { user, logdOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logdOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleDropdownToggle = () => {
    setDropDown(!dropDown);
  };
  const navbar = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-20 w-[97%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-2xl font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-black">ABJOBS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-semibold">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">sign in</a> */}</div>
      <FaBarsStaggered
        onClick={handleDropdownToggle}
        className="text-5xl  relative m-4 cursor-pointer "
      />
      {dropDown && (
        <ul
          data-aos="fade-left"
          className="  menu text-sm  right-20 top-16   z-10  font-semibold absolute bg-white w-60 rounded mt-2 "
        >
          {user ? (
            <>
              <li onClick={handleLogOut} className="text-2xl font-semibold">
                <a>Log out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/login"} className="text-2xl font-semibold">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default NaveBar;
