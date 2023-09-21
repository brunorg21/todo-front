import { ReactNode, createContext } from "react";

interface AlertProviderProps {
  children: ReactNode;
}

interface AlertContextProps {
  toast: typeof toast;
}

export const AlertContext = createContext({} as AlertContextProps);

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function renderToast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export function AlertProvider({ children }: AlertProviderProps) {
  return (
    <AlertContext.Provider value={{ toast }}>
      {renderToast()}

      {children}
    </AlertContext.Provider>
  );
}
