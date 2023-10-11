import React from "react";

//import Create Context & useState
import { useState, createContext } from "react";

//Create Context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //Sidebar State
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
