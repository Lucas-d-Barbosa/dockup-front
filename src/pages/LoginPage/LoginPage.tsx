import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { BiLogIn } from "react-icons/bi";
import styles from "./LoginPage.module.css";
import logo from "../../assets/images/logo-dockup2-sb.png";
import bgImg from "../../assets/images/server.jpg";
import { Label } from "../../components/Label/Label";
import { FaUserShield } from "react-icons/fa";
import { LinkRouter } from "../../components/LinkRouter/LinkRouter";
import { useRef } from "react";
import { ToastAdapter } from "../../Adapter/ToastAdapter";
import { fakeUsers } from "../../database/fakeUsers";
import { useNavigate } from "react-router";
export function Login() {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleValidateInputs(e: React.FormEvent<HTMLFormElement>) {
    ToastAdapter.dismiss();
    e.preventDefault();
    const emailValue = emailInput.current?.value;
    const passwordValue = passwordInput.current?.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/;

    if (!emailValue || !passwordValue) {
      ToastAdapter.warning("Preencha todos os campos.");
      return;
    }

    if (passwordValue.length < 4 || !regexPassword.test(passwordValue)) {
      ToastAdapter.warning(
        "Senha fraca! Use pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos especiais."
      );
      return;
    }

    if (!emailRegex.test(emailValue)) {
      ToastAdapter.warning("Digite um email válido!");
      return;
    }

    const user = fakeUsers.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );

    if (!user) {
      ToastAdapter.error("Email ou senha incorretos.");
      return;
    }

    if (user) {
      const { password, ...userSave } = user;
      void password;
      localStorage.setItem("token", "123");
      localStorage.setItem("user", JSON.stringify(userSave));
      navigate("/dashboard");
    }
  }
  return (
    <section className={styles.sectionLogin}>
      <div className={styles.containerLogin}>
        <Form onSubmit={handleValidateInputs}>
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
                ref={emailInput}
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
                ref={passwordInput}
              />
            </div>
            <Button
              type="submit"
              text="Logar"
              classWidth={"max-w-md"}
              icon={BiLogIn}
            />
            <span className="max-w-md">
              Não possui uma conta? <LinkRouter ref="/" text="Cadastre-se" />
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
