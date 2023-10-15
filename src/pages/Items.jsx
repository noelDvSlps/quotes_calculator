import { Button, Table } from "react-bootstrap";
import { useNavbar } from "../providers/navbarProvider";
export const Items = () => {
  const { items, quoteItems, setQuoteItems } = useNavbar();

  const handleAddQuote = (id) => {
    setQuoteItems([...quoteItems, { itemId: id, totalCost: 0 }]);
  };

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Items </div>

      <div className="page-body">
        <div className="projects">
          <Table striped bordered hover size="sm" style={{ fontSize: "16px" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td> {item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      variant="outline-dark"
                      style={{ margin: "10px" }}
                      // onClick={() => navigate(`/quotes/${item.id}`)}
                      // as={Link} to={item.path}
                      onClick={() => handleAddQuote(item.id)}
                    >
                      Quote
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* {items.map((item, index) => (
            <div
              className="item-container"
              style={{ flexDirection: "column" }}
              key={index}
            >
              <Item key={index} item={item} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
