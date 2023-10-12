/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      id: 1,
      name: "SPO-115-110-01",
      description: "Blade#1 30 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 72,
      tooling_fixtures: 120,
      material_cost_per_foot: 26.55,
      cut_length: 0.44,
      material_cost_per_pc: 11.682,
    },
    {
      id: 2,
      name: "SPO-115-210-01",
      description: "Blade#2 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 3,
      name: "SPO-115-710-01",
      description: "Blade#2 Angled, 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 4,
      name: "SPO-115-110-01",
      description: "Blade#1 30 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 72,
      tooling_fixtures: 120,
      material_cost_per_foot: 26.55,
      cut_length: 0.44,
      material_cost_per_pc: 11.682,
    },
    {
      id: 5,
      name: "SPO-115-210-01",
      description: "Blade#2 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 6,
      name: "SPO-115-710-01",
      description: "Blade#2 Angled, 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 7,
      name: "SPO-115-110-01",
      description: "Blade#1 30 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 72,
      tooling_fixtures: 120,
      material_cost_per_foot: 26.55,
      cut_length: 0.44,
      material_cost_per_pc: 11.682,
    },
    {
      id: 8,
      name: "SPO-115-210-01",
      description: "Blade#2 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 9,
      name: "SPO-115-710-01",
      description: "Blade#2 Angled, 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 10,
      name: "SPO-115-110-01",
      description: "Blade#1 30 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 72,
      tooling_fixtures: 120,
      material_cost_per_foot: 26.55,
      cut_length: 0.44,
      material_cost_per_pc: 11.682,
    },
    {
      id: 11,
      name: "SPO-115-210-01",
      description: "Blade#2 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 12,
      name: "SPO-115-710-01",
      description: "Blade#2 Angled, 20 x 100mm",
      machine_info: "MILL 3 OPS TOTAL",
      program_time_total: 210,
      setup_time_total: 240,
      cycle_time_total: 68,
      tooling_fixtures: 120,
      material_cost_per_foot: 22.59,
      cut_length: 0.44,
      material_cost_per_pc: 9.9396,
    },
    {
      id: 13,
      name: "SPO-115-110",
      description: "Blade#1 30x100mm Assy",
    },
    {
      id: 14,
      name: "SPO-115-210",
      description: "Blade#2 20x100mm Assy",
    },
    {
      id: 15,
      name: "SPO-115-311",
      description: "Blade#3 30x110mm Assy",
    },
  ];

  const quotation = [
    {
      id: 1,
      name: "SPO-115-110",
      description: "Blade#1 30x100mm Assy",
    },
  ];

  const subs = [
    {
      id: 1,
      item_id_top: 13,
      item_id_sub: 1,
    },
    {
      id: 1,
      item_id_top: 13,
      item_id_sub: 2,
    },
    {
      id: 1,
      item_id_top: 13,
      item_id_sub: 3,
    },
  ];

  const rate = [
    {
      RunTimePerHour: 90,
      other: 80,
    },
  ];

  const anodizing = [
    {
      id: 1,
      item_id: 13,
      rate_id: 1,
    },
    {
      id: 2,
      item_id: 13,
      rate_id: 2,
    },
    {
      id: 3,
      item_id: 13,
      rate_id: 3,
    },
  ];

  const assembly = [
    {
      id: 1,
      item_id: 13,
      rate_id: 1,
    },
    {
      id: 2,
      item_id: 13,
      rate_id: 2,
    },
    {
      id: 3,
      item_id: 13,
      rate_id: 3,
    },
    {
      id: 4,
      item_id: 13,
      rate_id: 4,
    },
  ];

  const anodizingRates = [
    {
      id: 1,
      type: "A",
      start: 10,
      end: 14,
      price: 27.5,
    },
    {
      id: 2,
      type: "B",
      start: 15,
      end: 19,
      price: 18.33,
    },
    {
      id: 3,
      type: "C",
      start: 20,
      end: 200,
      price: 15,
    },
  ];

  const assemblyRates = [
    {
      id: 1,
      type: "A",
      start: 10,
      end: 14,
      price: 50,
    },
    {
      id: 2,
      type: "B",
      start: 15,
      end: 19,
      price: 45,
    },
    {
      id: 3,
      type: "C",
      start: 20,
      end: 25,
      price: 35,
    },
    {
      id: 4,
      type: "D",
      start: 26,
      end: 200,
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
        quotation,
        subs,
        rate,
        anodizing,
        anodizingRates,
        assembly,
        assemblyRates,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
