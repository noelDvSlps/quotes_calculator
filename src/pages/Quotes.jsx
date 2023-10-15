import { Quote } from "../components/Quote";
import { useNavbar } from "../providers/navbarProvider";

export const Quotes = () => {
  const { quoteItems } = useNavbar();

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Quotes </div>
      <div className="page-body">
        <div>DEMO noel</div>
        {quoteItems
          ? quoteItems.map((item, index) => (
              <Quote key={index} id={item.itemId} />
            ))
          : "Add items"}
      </div>
    </div>
  );
};
