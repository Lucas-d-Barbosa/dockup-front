import type { File } from "../models/File";

export const fakeFiles: File[] = [
  {
    id: "f1",
    userId: "u1",
    shelveId: "s1",
    name: "ProjetoX.pdf",
    path: "/files/u1/s1/ProjetoX.pdf",
    createdAt: new Date("2023-01-12T10:00:00Z"),
    updatedAt: new Date("2023-01-12T10:00:00Z"),
  },
  {
    id: "f2",
    userId: "u1",
    shelveId: "s2",
    name: "Resumo.md",
    path: "/files/u1/s2/Resumo.md",
    createdAt: new Date("2023-01-17T10:00:00Z"),
    updatedAt: new Date("2023-01-17T10:00:00Z"),
  },
  {
    id: "f3",
    userId: "u2",
    shelveId: "s3",
    name: "Certificado.jpg",
    path: "/files/u2/s3/Certificado.jpg",
    createdAt: new Date("2023-02-12T10:00:00Z"),
    updatedAt: new Date("2023-02-12T10:00:00Z"),
  },
  {
    id: "f4",
    userId: "u1",
    shelveId: null,
    name: "ArquivoSolto.txt",
    path: "/files/u1/ArquivoSolto.txt",
    createdAt: new Date("2023-01-20T10:00:00Z"),
    updatedAt: new Date("2023-01-20T10:00:00Z"),
  },
];
