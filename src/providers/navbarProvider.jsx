/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const costFactors = {
    runTimePerHr: 90,
    otherPerHr: 80,
  };

  const items = [
    {
      id: 1,
      name: "SPO-115-110-01",
      description: "Blade#1 30 x 100mm",
    },
    { id: 2, name: "SPO-115-210-01", description: "Blade#2 20 x 100mm" },
    {
      id: 3,
      name: "SPO-115-311-01",
      description: "Blade#3 , 30 x 110mm",
    },
    {
      id: 4,
      name: "SPO-115-710-01",
      description: "Blade#2 Angled 20 x 100mm",
    },
    {
      id: 5,
      name: "SPO-0000-02",
      description: "Handle connection",
    },
    {
      id: 6,
      name: "SPO-115-000-03",
      description: "Crown Gear",
    },
    {
      id: 7,
      name: "SPO-115-110",
      description: "Blade#1 30x100mm Assy",
    },
    {
      id: 8,
      name: "SPO-115-210",
      description: "Blade#2 20x100mm Assy",
    },
    {
      id: 9,
      name: "SPO-115-311",
      description: "Blade#3 30x110mm Assy",
    },
    {
      id: 10,
      name: "SPO-115-710",
      description: "Blade#2 Angled 20x100mm Assy",
    },
  ];

  const BOM = [
    {
      id: 1,
      topId: 7,
      subId: 1,
      qtyPerSet: 2,
    },
    {
      id: 2,
      topId: 7,
      subId: 5,
      qtyPerSet: 1,
    },
    {
      id: 3,
      topId: 7,
      subId: 6,
      qtyPerSet: 1,
    },
    {
      id: 4,
      topId: 8,
      subId: 2,
      qtyPerSet: 1,
    },
    {
      id: 5,
      topId: 8,
      subId: 5,
      qtyPerSet: 1,
    },
    {
      id: 6,
      topId: 8,
      subId: 6,
      qtyPerSet: 1,
    },
    {
      id: 7,
      topId: 9,
      subId: 3,
      qtyPerSet: 1,
    },
    {
      id: 8,
      topId: 9,
      subId: 5,
      qtyPerSet: 1,
    },
    {
      id: 9,
      topId: 9,
      subId: 6,
      qtyPerSet: 1,
    },
    {
      id: 10,
      topId: 10,
      subId: 4,
      qtyPerSet: 1,
    },
    {
      id: 11,
      topId: 10,
      subId: 5,
      qtyPerSet: 1,
    },
    {
      id: 12,
      topId: 10,
      subId: 6,
      qtyPerSet: 1,
    },
  ];
  // id	itemId	programTime	matPerFtCost	runTime	cycleTime	cutLength	fixtures
  const machine = [
    {
      id: 1,
      itemId: 1,
      programTime: 210,
      programTimeCost: (80 / 60) * 210,
      setupTime: 240,
      setupTimeCost: (80 / 60) * 240,
      cycleTime: 72,
      cycleTimeCost: (90 / 60) * 72,
      toolingFixtures: 120,
      materialCostPerFt: 26.55,
      cutLength: 0.44,
      materialCostPerSet: 11.68,
      notes: "some notes",
    },
    {
      id: 2,
      itemId: 2,
      programTime: 210,
      programTimeCost: (80 / 60) * 210,
      setupTime: 240,
      setupTimeCost: (80 / 60) * 240,
      cycleTime: 68,
      cycleTimeCost: (90 / 60) * 68,
      toolingFixtures: 120,
      materialCostPerFt: 22.59,
      cutLength: 0.44,
      materialCostPerSet: 9.94,
      notes: "some notes",
    },
    {
      id: 3,
      itemId: 3,
      programTime: 210,
      programTimeCost: (80 / 60) * 210,
      setupTime: 180,
      setupTimeCost: (80 / 60) * 180,
      cycleTime: 45,
      cycleTimeCost: (90 / 60) * 45,
      toolingFixtures: 90,
      materialCostPerFt: 26.55,
      cutLength: 0.59,
      materialCostPerSet: 15.66,
      notes: "some notes",
    },
    {
      id: 4,
      itemId: 4,
      programTime: 210,
      programTimeCost: (80 / 60) * 210,
      setupTime: 240,
      setupTimeCost: (80 / 60) * 240,
      cycleTime: 45,
      cycleTimeCost: (90 / 60) * 45,
      toolingFixtures: 90,
      materialCostPerFt: 22.59,
      cutLength: 0.47,
      materialCostPerSet: 10.62,
      notes: "some notes",
    },
    {
      id: 5,
      itemId: 5,
      programTime: 210,
      programTimeCost: (80 / 60) * 210,
      setupTime: 180,
      setupTimeCost: (80 / 60) * 180,
      cycleTime: 18,
      cycleTimeCost: (90 / 60) * 18,
      toolingFixtures: 0,
      materialCostPerFt: 12.47,
      cutLength: 0.26,
      materialCostPerSet: 3.24,
      notes: "some notes",
    },
    {
      id: 6,
      itemId: 6,
      programTime: 150,
      programTimeCost: (80 / 60) * 210,
      setupTime: 180,
      setupTimeCost: (80 / 60) * 180,
      cycleTime: 14,
      cycleTimeCost: (90 / 60) * 14,
      toolingFixtures: 120,
      materialCostPerFt: 8.23,
      cutLength: 0.059,
      materialCostPerSet: 0.49,
      notes: "some notes",
    },
  ];

  // id	itemId	qtyStart	qtyEnd	price
  const assyRates = [
    {
      id: 1,
      name: "Blade1",
      itemId: 7,
      qtyStart: 10,
      qtyEnd: 14,
      price: 50,
    },
    {
      id: 2,
      name: "Blade1",
      itemId: 7,
      qtyStart: 15,
      qtyEnd: 19,
      price: 45,
    },
    {
      id: 3,
      name: "Blade1",
      itemId: 7,
      qtyStart: 20,
      qtyEnd: 29,
      price: 35,
    },
    {
      id: 4,
      name: "Blade1",
      itemId: 7,
      qtyStart: 30,
      qtyEnd: 200,
      price: 30,
    },
    {
      id: 5,
      name: "Blade1",
      itemId: 8,
      qtyStart: 10,
      qtyEnd: 14,
      price: 50,
    },
    {
      id: 6,
      name: "Blade1",
      itemId: 8,
      qtyStart: 15,
      qtyEnd: 19,
      price: 45,
    },
    {
      id: 7,
      name: "Blade1",
      itemId: 8,
      qtyStart: 20,
      qtyEnd: 29,
      price: 35,
    },
    {
      id: 8,
      name: "Blade1",
      itemId: 8,
      qtyStart: 30,
      qtyEnd: 200,
      price: 30,
    },
  ];

  // id	itemId	qtyStart	qtyEnd	price
  const outsideRates = [
    {
      id: 1,
      name: "Anodizing",
      itemId: 7,
      qtyStart: 10,
      qtyEnd: 14,
      price: 50,
    },
    {
      id: 2,
      name: "Anodizing",
      itemId: 7,
      qtyStart: 15,
      qtyEnd: 19,
      price: 45,
    },
    {
      id: 3,
      name: "Anodizing",
      itemId: 7,
      qtyStart: 20,
      qtyEnd: 29,
      price: 35,
    },
    {
      id: 4,
      name: "Anodizing",
      itemId: 7,
      qtyStart: 30,
      qtyEnd: 200,
      price: 30,
    },
    {
      id: 5,
      name: "Anodizing",
      itemId: 8,
      qtyStart: 10,
      qtyEnd: 14,
      price: 50,
    },
    {
      id: 6,
      name: "Anodizing",
      itemId: 8,
      qtyStart: 15,
      qtyEnd: 19,
      price: 45,
    },
    {
      id: 7,
      name: "Anodizing",
      itemId: 8,
      qtyStart: 20,
      qtyEnd: 29,
      price: 35,
    },
    {
      id: 8,
      name: "Anodizing",
      itemId: 8,
      qtyStart: 30,
      qtyEnd: 200,
      price: 30,
    },
  ];

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggle,
        items,
        costFactors,
        BOM,
        machine,
        assyRates,
        outsideRates,
        quoteItems,
        setQuoteItems,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
