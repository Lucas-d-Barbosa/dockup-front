import { createContext } from "react";
import type { Dispatch } from "react";
import type { File } from "../../models/File";
import type { FilesAction } from "./fileReducer";

type FilesContextType = {
  files: File[];
  dispatch: Dispatch<FilesAction>;
};

export const FilesContext = createContext<FilesContextType | undefined>(
  undefined
);
