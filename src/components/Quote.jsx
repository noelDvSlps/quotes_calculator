/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import { useNavbar } from "../providers/navbarProvider";

export const Quote = ({ id }) => {
  const summaryQtys = [10, 20, 30];
  const {
    items,
    BOM,
    machine,
    assyRates,
    outsideRates,
    costFactors,
    setQuoteItems,
    quoteItems,
  } = useNavbar();
  const topItem = items.find((item) => item.id === +id);
  const filteredMachine = machine.filter((mac) => mac.itemId === +id);
  const machineKeys = filteredMachine.length
    ? Object.keys(filteredMachine[0])
    : undefined;
  const filteredBOM = BOM.filter((sub) => sub.topId === +id);
  const filteredOutside = outsideRates.filter(
    (outsideProcess) => outsideProcess.itemId === +id
  );

  const filteredAssembly = assyRates.filter((assy) => assy.itemId === +id);

  const onHandleDelete = ({ id }) => {
    setQuoteItems(
      quoteItems.filter((quoteItem) => {
        return quoteItem.itemId !== id;
      })
    );
  };
  const totalCostMachine = (qty) => {
    let cost = 0;
    machineKeys.map((machineKey) => {
      if (machineKey.toLowerCase().includes("cost")) {
        console.log(filteredMachine);
        cost = filteredMachine[0][machineKey] + cost;
      }
    });
    return cost * qty;
  };

  const totalCostMachineBom = (qty) => {
    let cost = 0;
    filteredBOM.map((sub) => {
      const item = items.find((item) => item.id === sub.subId);
      const machineInfo = machine.find((m) => item.id === m.itemId);
      cost =
        (cost +
          machineInfo.cycleTimeCost +
          machineInfo.setupTimeCost +
          machineInfo.materialCostPerSet) *
        sub.qtyPerSet;
    });
    return cost * qty;
  };

  const totalCostOutside = (qty) => {
    const outsideRange = filteredOutside.find((outside) => {
      return qty >= outside.qtyStart && qty <= outside.qtyEnd;
    });

    return outsideRange ? outsideRange.price * qty : "error";
  };
  const totalCostAssy = (qty) => {
    const assyRange = filteredAssembly.find((assy) => {
      return qty >= assy.qtyStart && qty <= assy.qtyEnd;
    });

    return assyRange ? assyRange.price * qty : "error";
  };

  const itemTotalCost = (qty) => {
    let cost = 0;
    cost = cost + (filteredMachine.length ? totalCostMachine(qty) : 0);
    cost = cost + (filteredBOM.length ? totalCostMachineBom(qty) : 0);
    cost = cost + (filteredOutside.length ? totalCostOutside(qty) : 0);
    cost = cost + (filteredAssembly.length ? totalCostAssy(qty) : 0);

    return cost;
  };

  return (
    <div className="projects" style={{ flexDirection: "column" }}>
      <div className="sub-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontWeight: "600px", color: "maroon" }}>
            {topItem.name} {topItem.description}{" "}
          </span>
          <span className="link" onClick={() => onHandleDelete({ id })}>
            ❌
          </span>
        </div>
        {filteredMachine.length ? (
          <div>
            <Table striped bordered hover size="sm">
              <thead style={{ fontWeight: "600" }}>
                <tr>
                  {machineKeys.map((machineKey, index) => {
                    return (
                      machineKey !== "id" &&
                      machineKey !== "itemId" && (
                        <td key={index}> {machineKey}</td>
                      )
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {filteredMachine.map((mac, index) => (
                  <tr key={index}>
                    {machineKeys.map((machineKey, index) => {
                      const dollarSign = machineKey
                        .toLowerCase()
                        .includes("cost")
                        ? "$"
                        : "";
                      return (
                        machineKey !== "id" &&
                        machineKey !== "itemId" && (
                          <td key={index}>
                            {dollarSign} {mac[machineKey]}
                          </td>
                        )
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              Total Cost(program time ($80/hr) + cycle time ($90/hr)+ setup
              time($80/hr)): ${totalCostMachine()}
            </div>
          </div>
        ) : null}
        {filteredBOM.length ? (
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
                {filteredBOM.map((sub, index) => {
                  const item = items.find((item) => item.id === sub.subId);
                  const machineInfo = machine.find((m) => item.id === m.itemId);
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{sub.qtyPerSet}</td>
                      <td>${machineInfo.materialCostPerSet}</td>
                      <td>{machineInfo.cycleTime}</td>
                      <td>
                        ${" "}
                        {(machineInfo.cycleTime * costFactors.runTimePerHr) /
                          60}
                      </td>
                      <td>{machineInfo.setupTime}</td>
                      <td>
                        ${" "}
                        {(machineInfo.setupTime * costFactors.otherPerHr) / 60}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div>
              Total Cost( cycle time ($90/hr)+ setup time($80/hr) +
              materialCostPerSet): ${totalCostMachineBom(1)}
            </div>
          </div>
        ) : null}

        {filteredOutside.length ? (
          <div>
            <div>Outside</div>

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  {filteredOutside.map((outsideProcess, index) => {
                    return (
                      <th key={index}>
                        QTY {outsideProcess.qtyStart} - {outsideProcess.qtyEnd}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {filteredOutside.map((outsideProcess, index) => {
                    return <td key={index}>$ {outsideProcess.price}</td>;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        ) : null}

        {filteredAssembly.length ? (
          <div>
            <div>Assembly</div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  {filteredAssembly.map((assy, index) => {
                    return (
                      <th key={index}>
                        QTY {assy.qtyStart} - {assy.qtyEnd}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {filteredAssembly.map((assy, index) => {
                    return <td key={index}>$ {assy.price}</td>;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        ) : null}

        <section id={"summary-" + topItem.name}>
          <div>Summary</div>

          <div>
            {summaryQtys.map((summaryQty, index) => (
              <div key={index} style={{ border: "1px solid" }}>
                <div>
                  <strong>Price for {summaryQty}: </strong>
                </div>
                <div>
                  {filteredMachine.length
                    ? "Machining: $ " + totalCostMachine(summaryQty)
                    : null}
                </div>
                <div>
                  {filteredBOM.length
                    ? "MachiningBOM: $ " + totalCostMachineBom(summaryQty)
                    : null}
                </div>
                <div>
                  {filteredOutside.length
                    ? "Outside: $ " + totalCostOutside(summaryQty)
                    : null}
                </div>
                <div>
                  {filteredAssembly.length
                    ? "Assembly: $ " + totalCostAssy(summaryQty)
                    : null}
                </div>
                <hr />
                <span>
                  <strong>TOTAL </strong>
                </span>
                ${" "}
                {isNaN(itemTotalCost(summaryQty))
                  ? summaryQty + " is out of range"
                  : itemTotalCost(summaryQty)}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
