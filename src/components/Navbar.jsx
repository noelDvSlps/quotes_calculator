/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import myPic from "../assets/images/me.jpg";
import { FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavbar } from "../providers/navbarProvider";
import { Bars } from "./Bars";
import { Footer } from "./Footer";
// import Background from "../assets/images/react.jpg";
export const Navbar = ({ children }) => {
  const maxSizeToShowBurger = useRef(600);
  const { isOpen, setIsOpen } = useNavbar();

  const [burger, setBurger] = useState(false);

  const menuItem = [
    {
      path: "/",
      name: "home",
      icon: <FaTh />,
    },
    {
      path: "/quotes",
      name: "quotes",
      icon: <FaUserAlt />,
    },
  ];
  useEffect(() => {
    setBurger(window.innerWidth < maxSizeToShowBurger.current ? true : false);
    function handleResize() {
      setBurger(window.innerWidth < maxSizeToShowBurger.current ? true : false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-hero">
      <div
        className="top-bar"
        style={{
          borderBottom: "1px solid",
        }}
      >
        <div className="top-section ">
          <div className="profile">
            {/* <img
              style={{
                width: "50px",
                borderRadius: "50%",
              }}
              src={myPic}
              alt=""
            /> */}
            <div className="name">Quote Calculator</div>
          </div>
          {burger && (
            <div className="bars">
              <Bars />
            </div>
          )}
        </div>

        <div className="link-container">
          {(!burger || (burger && isOpen)) &&
            menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={"link"}
                onClick={() => setIsOpen(false)}
              >
                <div
                  style={{
                    transition: "all 0.5s",
                  }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
        </div>
      </div>

      <main
        style={{
          // backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setIsOpen(false)}
      >
        <div className="children">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
