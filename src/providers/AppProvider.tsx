import { Bounce, ToastContainer } from "react-toastify";

type AppProviderProps = {
  children: React.ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      {children}{" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
