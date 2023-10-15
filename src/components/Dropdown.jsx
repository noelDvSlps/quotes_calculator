/* eslint-disable react/prop-types */
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Dropdown = ({ item, st }) => {
  return (
    <div>
      <NavDropdown
        title={item.name}
        id="basic-nav-dropdown"
        style={{ ...(st ? st : null) }}
      >
        {item.submenu.map((sub, index) => {
          if (Object.hasOwn(sub, "submenu")) {
            return <Dropdown key={index} item={sub} st={{ color: "black" }} />;
          } else {
            return (
              <NavDropdown.Item
                as={Link}
                to={sub.path}
                key={index}
                href="#action/3.1"
              >
                {sub.name}
              </NavDropdown.Item>
            );
          }
        })}
      </NavDropdown>
    </div>
  );
};
