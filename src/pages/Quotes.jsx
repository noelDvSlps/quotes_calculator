import { Table } from "react-bootstrap";
import { useNavbar } from "../providers/navbarProvider";

export const Quotes = () => {
  const { items, subs, anodizing, anodizingRates, assembly, assemblyRates } =
    useNavbar();

  const topItem = items.find((item) => item.id === 13);

  const filteredSubs = subs.filter((sub) => sub.item_id_top === 13);
  const filteredAnodizing = anodizing.filter(
    (anodize) => anodize.item_id === 13
  );
  const filteredAssembly = assembly.filter((assy) => assy.item_id === 13);
  //   console.log(filteredAnodizing);

  return (
    <div className="page-container" style={{ height: "fit-content" }}>
      <div className="page-title"> Quotes </div>
      <div className="page-body">
        <div className="projects" style={{ flexDirection: "column" }}>
          <div>CUSTOMER: JOB</div>
          <div>Camber MedTech</div>
          <div className="sub-container">
            <div>{topItem.name}</div>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Desc</th>
                    <th>Qty per</th>
                    <th>Material</th>
                    <th>Total Run Time</th>
                    <th>Total Run Time Cost</th>
                    <th>Total Setup time</th>
                    <th>Ttoal stup time cost</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubs.map((sub, index) => {
                    const subItem = items.find(
                      (item) => item.id === sub.item_id_sub
                    );
                    return (
                      <tr key={index}>
                        <td>{subItem.name}</td>
                        <td>{subItem.description}</td>
                        <td>{1}</td>
                        <td>${subItem.material_cost_per_pc}</td>
                        <td>{subItem.cycle_time_total}</td>
                        <td>${(90 / 60) * subItem.cycle_time_total}</td>
                        <td>{subItem.setup_time_total}</td>
                        <td>$ {(80 / 60) * subItem.setup_time_total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            {/* anodizing */}
            <div>Anodizing</div>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {filteredAnodizing.map((anodize, index) => {
                      const rate = anodizingRates.find(
                        (anodizingRate) => anodizingRate.id === anodize.rate_id
                      );
                      return (
                        <th key={index}>
                          QTY {rate.start} - {rate.end}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {filteredAnodizing.map((anodize, index) => {
                      const rate = anodizingRates.find(
                        (anodizingRate) => anodizingRate.id === anodize.rate_id
                      );
                      return <td key={index}>$ {rate.price}</td>;
                    })}
                  </tr>
                </tbody>
              </Table>
            </div>
            {/* assembly */}
            <div>Assembly</div>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {filteredAssembly.map((assy, index) => {
                      const rate = assemblyRates.find(
                        (assemblyRate) => assemblyRate.id === assy.rate_id
                      );
                      return (
                        <th key={index}>
                          QTY {rate.start} - {rate.end}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {filteredAssembly.map((assy, index) => {
                      const rate = assemblyRates.find(
                        (assemblyRate) => assemblyRate.id === assy.rate_id
                      );
                      return <td key={index}>$ {rate.price}</td>;
                    })}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
