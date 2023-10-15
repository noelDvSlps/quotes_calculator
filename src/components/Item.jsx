import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="item">
      {Object.keys(item).map((property, index) => {
        if (property !== "id") {
          return (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  flex: "1fr",
                  minWidth: "50%",
                  textAlign: "right",
                  paddingRight: "5px",
                }}
              >
                {property}
              </div>
              <div style={{ flex: "1fr", paddingLeft: "5px" }}>
                {item[property]}
              </div>
            </div>
          );
        }
      })}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          variant="outline-light"
          style={{ margin: "10px" }}
          onClick={() => navigate(`/quotes/${item.id}`)}
          // as={Link} to={item.path}
        >
          Edit
        </Button>
        <Button variant="outline-light" style={{ margin: "10px" }}>
          Quote
        </Button>
      </div>
    </div>
  );
};
