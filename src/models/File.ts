export interface File {
  id: string;
  userId: string;
  shelveId: string | null;
  path: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
