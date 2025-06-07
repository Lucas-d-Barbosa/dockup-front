import { useContext } from "react";
import { FilesContext } from "./FileContext";

export function useFiles() {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error("useFiles must be used within a FilesProvider");
  }
  return context;
}
