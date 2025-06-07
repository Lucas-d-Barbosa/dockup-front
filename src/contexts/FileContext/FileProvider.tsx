import { useEffect, useReducer } from "react";
import { FilesContext } from "./FileContext";
import { filesReducer } from "./fileReducer";
import type { ReactNode } from "react";
import { loadFilesFromStorage, saveFilesToStorage } from "./filesStorage";

type FileProviderProps = {
  children: ReactNode;
};

export function FilesProvider({ children }: FileProviderProps) {
  const [files, dispatch] = useReducer(filesReducer, [], loadFilesFromStorage);
  useEffect(() => {
    saveFilesToStorage(files);
  }, [files]);

  return (
    <FilesContext.Provider value={{ files, dispatch }}>
      {children}
    </FilesContext.Provider>
  );
}
