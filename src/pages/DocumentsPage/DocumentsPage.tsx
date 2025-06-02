import { AiOutlineFile } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { fakeFiles } from "../../database/fakeFiles";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { format } from "date-fns";
export function DocumentsPage() {
  const files = fakeFiles;
  return (
    <MainLayout pageTitle={"Documentos Disponíveis"}>
      {files.map((file) => {
        return (
          <Card
            icon={<AiOutlineFile size={150} title={file.name} />}
            title={file.name}
            descricao={format(new Date(file.createdAt), "dd/MM/yyyy hh:mm")}
          />
        );
      })}
    </MainLayout>
  );
}
