// context/files/filesStorage.ts
import type { File } from "../../models/File";

const LOCAL_STORAGE_KEY = "files";

export function loadFilesFromStorage(): File[] {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    // Reconverte datas para Date
    return parsed.map((file: File) => ({
      ...file,
      createdAt: new Date(file.createdAt),
      updatedAt: new Date(file.updatedAt),
    }));
  } catch {
    return [];
  }
}

export function saveFilesToStorage(files: File[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files));
}
