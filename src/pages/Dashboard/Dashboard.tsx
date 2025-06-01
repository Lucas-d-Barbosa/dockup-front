import { AiOutlineFile, AiOutlineLogout } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { FaBook, FaUserCircle, FaCog, FaQuestionCircle } from "react-icons/fa";
export function Dashboard() {
  return (
    <>
      <MainLayout
        pageTitle={
          "Olá, Lucas! Bem-vindo ao Dockup. Aqui você organiza seus documentos com facilidade."
        }
      >
        <>
          <Card
            icon={<AiOutlineFile size={150} title="Documentos" />}
            title="Documentos"
            descricao="Gerencie seus documentos com facilidade"
          />
          <Card
            icon={<FaBook size={150} title="Estantes" />}
            title="Estantes"
            descricao="Organize seus conteúdos por categorias"
          />
          <Card
            icon={<FaUserCircle size={150} title="Perfil" />}
            title="Perfil"
            descricao="Visualize e edite suas informações pessoais"
          />
          <Card
            icon={<FaCog size={150} title="Configurações" />}
            title="Configurações"
            descricao="Personalize o sistema ao seu gosto"
          />
          <Card
            icon={<FaQuestionCircle size={150} title="Ajuda" />}
            title="Ajuda"
            descricao="Encontre suporte e respostas para dúvidas"
          />
          <Card
            icon={<AiOutlineLogout size={150} title="Sair" />}
            title="Sair"
            descricao="Encerrar sessão no sistema com segurança"
          />
        </>
      </MainLayout>
    </>
  );
}
