import { AiOutlineFile } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";
import styles from "./DocumentesPage.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import type { File } from "../../models/File";
import { useFiles } from "../../contexts/FileContext/useFiles";
import { ToastAdapter } from "../../adapter/ToastAdapter";
export function DocumentsPage() {
  const [hoveredFileId, setHoveredFileId] = useState<string | null>(null);
  const [activeModalUpload, setActiveModalUpload] = useState(false);
  const { files, dispatch } = useFiles();

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleModalUpload() {
    setActiveModalUpload((prevState) => {
      return !prevState;
    });
  }

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Arquivo selecionado:", file.name);
    }
  };

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ToastAdapter.dismiss();

    const selectedFile = fileInputRef.current?.files?.[0];
    if (selectedFile) {
      const newFile = {
        id: `f${files.length + 1}`,
        userId: "u1",
        shelveId: "s1",
        name: selectedFile?.name,
        path: "/files/u1/s1/" + selectedFile?.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as File;
      dispatch({ type: "ADD_FILE", payload: newFile });

      ToastAdapter.success("Arquivo adicionado com sucesso!");
      handleModalUpload();
    }
  }

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
        typeActionName={"Enviar"}
        formId="formModal"
      >
        <form
          action=""
          encType="multipart/form-data"
          id="formModal"
          onSubmit={handleFormSubmit}
        >
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
        </form>
      </Modal>
    </MainLayout>
  );
}
