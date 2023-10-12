import { Button } from "react-bootstrap";
import { useNavbar } from "../providers/navbarProvider";
import { Item } from "../components/item";

export const Items = () => {
  const { items } = useNavbar();

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Items </div>
      <Button type="submit" value="Submit" size="sm" style={{ width: "100px" }}>
        Add Item
      </Button>
      <div className="page-body">
        <div className="projects">
          {items.map((item, index) => (
            <div
              className="item-container"
              style={{ flexDirection: "column" }}
              key={index}
            >
              <Item key={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
