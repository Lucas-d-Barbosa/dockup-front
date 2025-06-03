import { AiOutlineFile } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { fakeFiles } from "../../database/fakeFiles";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";
import styles from "./DocumentesPage.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
export function DocumentsPage() {
  const [hoveredFileId, setHoveredFileId] = useState<string | null>(null);
  const [activeModalUpload, setActiveModalUpload] = useState(false);
  const files = fakeFiles;
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleModalUpload() {
    setActiveModalUpload((prevState) => {
      return !prevState;
    });
  }

  const handleClick = () => {
    fileInputRef.current?.click(); // 👈 uso seguro com optional chaining
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Arquivo selecionado:", file.name);
    }
  };

  return (
    <MainLayout
      pageTitle={"Documentos Disponíveis"}
      optional={
        <>
          <button className={styles.button} onClick={handleModalUpload}>
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

      <Modal
        title="Adicionar Arquivo"
        active={activeModalUpload}
        onClose={() => setActiveModalUpload(false)}
      >
        <form action="" encType="multipart/form-data">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            hidden
          />
          <button
            type="button"
            onClick={handleClick}
            className={styles.buttonUpload}
          >
            Selecionar Arquivo
          </button>
          <button type="submit" className={styles.buttonSumbit}>
            Enviar
          </button>
        </form>
      </Modal>
    </MainLayout>
  );
}
