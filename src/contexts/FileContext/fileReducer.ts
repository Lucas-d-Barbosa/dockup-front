import type { File } from "../../models/File";

export type FilesAction =
  | { type: "ADD_FILE"; payload: File }
  | { type: "REMOVE_FILE"; payload: string };

export function filesReducer(state: File[], action: FilesAction): File[] {
  switch (action.type) {
    case "ADD_FILE":
      return [...state, action.payload];
    case "REMOVE_FILE":
      return state.filter((file) => file.id !== action.payload);
    default:
      return state;
  }
}
