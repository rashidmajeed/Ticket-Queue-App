import React from "react";
import { UiProvider } from "./context/UiContext";
import { RouterPage } from "././Pages/RouterPage";

export const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
};
