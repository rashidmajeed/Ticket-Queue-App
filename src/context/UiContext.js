import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [closeMenu, setCloseMenu] = useState(false);

  const showMenu = () => {
    setCloseMenu(false);
  };

  const hideMenu = () => {
    setCloseMenu(true);
  };

  return (
    <UiContext.Provider
      value={{
        closeMenu,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
