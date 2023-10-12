import { Button } from "react-bootstrap";

/* eslint-disable react/prop-types */
export const Item = ({ item }) => {
  return (
    <div className="item">
      {Object.keys(item).map((fn, index) => {
        if (fn !== "id") {
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
                {fn}
              </div>
              <div style={{ flex: "1fr", paddingLeft: "5px" }}>{item[fn]}</div>
            </div>
          );
        }
      })}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="outline-light" style={{ margin: "10px" }}>
          Edit
        </Button>
        <Button variant="outline-light" style={{ margin: "10px" }}>
          Quote
        </Button>
      </div>
    </div>
  );
};
