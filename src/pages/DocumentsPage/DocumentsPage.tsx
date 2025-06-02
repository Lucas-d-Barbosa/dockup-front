import { AiOutlineFile } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { fakeFiles } from "../../database/fakeFiles";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";
import styles from "./DocumentesPage.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useState } from "react";
export function DocumentsPage() {
  const [hoveredFileId, setHoveredFileId] = useState<string | null>(null);
  const files = fakeFiles;
  return (
    <MainLayout
      pageTitle={"Documentos Disponíveis"}
      optional={
        <>
          <button className={styles.button}>
            Novo
            <FaPlus />
          </button>
        </>
      }
    >
      {files.map((file) => {
        const isHovered = hoveredFileId === file.id;
        return (
          <div
            onMouseEnter={() => setHoveredFileId(file.id)}
            onMouseLeave={() => setHoveredFileId(null)}
            key={file.id}
          >
            <Card
              icon={
                isHovered ? (
                  <FaCloudDownloadAlt size={150} title="Baixar" />
                ) : (
                  <AiOutlineFile size={150} title={file.name} />
                )
              }
              title={file.name}
              descricao={format(new Date(file.createdAt), "dd/MM/yyyy HH:mm")}
            />
          </div>
        );
      })}
    </MainLayout>
  );
}
