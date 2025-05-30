import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { BiLogIn } from "react-icons/bi";
import styles from "./Login.module.css";
import logo from "../../assets/images/logo-sb.png";
import bgImg from "../../assets/images/server.jpg";
import { Label } from "../../components/Label/Label";
import { FaUserShield } from "react-icons/fa";
export function Login() {
  return (
    <section className={styles.sectionLogin}>
      <div className={styles.containerLogin}>
        <Form>
          <div className={styles.containerImg}>
            <img
              src={logo}
              alt="Logo da Dockup"
              title="Logo da Dockup"
              aria-label="Logo da Dockup"
            />
          </div>
          <div className={styles.containerInput}>
            <h2>Entre em sua conta</h2>
            <div className={styles.inputGroup}>
              <Label
                text="Email:"
                forID="email"
                classWidth={"max-w-md"}
              ></Label>
              <Input
                type="email"
                placeholder={"Digite seu email"}
                classWidth={"max-w-md"}
                id="email"
              />
            </div>
            <div className={styles.inputGroup}>
              <Label
                text="Senha:"
                forID="senha"
                classWidth={"max-w-md"}
              ></Label>

              <Input
                type="password"
                placeholder={"Digite sua senha"}
                classWidth={"max-w-md"}
                id="senha"
              />
            </div>
            <Button
              type="button"
              text="Logar"
              classWidth={"max-w-md"}
              icon={BiLogIn}
            />
            <span className="max-w-md">
              Não possui uma conta? <a href="#">Cadastre-se</a>
            </span>
          </div>
        </Form>
      </div>
      <div className={styles.containerText}>
        <div className={styles.containerBgImg}>
          <img src={bgImg} alt="" />
        </div>
        <FaUserShield
          size={300}
          aria-label="Ícone de um usuário protegido por um escudo, representando segurança"
          title="Segurança dos seus arquivos"
        />

        <h2>Controle total dos seus arquivos</h2>
        <h3>
          Organize em estantes personalizadas, com acesso seguro de qualquer
          lugar
        </h3>
      </div>
    </section>
  );
}
