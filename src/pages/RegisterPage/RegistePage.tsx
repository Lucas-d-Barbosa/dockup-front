import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { BiUserPlus } from "react-icons/bi";
import styles from "./RegisterPage.module.css";
import logo from "../../assets/images/logo-sb.png";
import bgImg from "../../assets/images/server.jpg";
import { Label } from "../../components/Label/Label";
import { FaUserPlus } from "react-icons/fa";
import { LinkRouter } from "../../components/LinkRouter/LinkRouter";
import { useRef } from "react";
import { ToastAdapter } from "../../Adapter/ToastAdapter";
import * as React from "react";
export function Register() {
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const confirmPasswordInput = useRef<HTMLInputElement>(null);

    function handleValidateInputs(e: React.FormEvent<HTMLFormElement>) {
        ToastAdapter.dismiss();
        e.preventDefault();

        const nameValue = nameInput.current?.value;
        const emailValue = emailInput.current?.value;
        const passwordValue = passwordInput.current?.value;
        const confirmPasswordValue = confirmPasswordInput.current?.value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/;

        if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
            ToastAdapter.warning("Preencha todos os campos.");
            return;
        }

        if (nameValue.length < 2) {
            ToastAdapter.warning("Nome deve ter pelo menos 2 caracteres.");
            return;
        }

        if (!emailRegex.test(emailValue)) {
            ToastAdapter.warning("Digite um email válido!");
            return;
        }

        if (passwordValue.length < 8 || !regexPassword.test(passwordValue)) {
            ToastAdapter.warning("Senha fraca! Use pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos especiais.");
            return;
        }

        if (passwordValue !== confirmPasswordValue) {

            ToastAdapter.error("As senhas não coincidem.");
            return;
        }


        ToastAdapter.success("Cadastro realizado com sucesso!");
    }

    return (
        <section className={styles.sectionRegister}>
            <div className={styles.containerRegister}>
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
                        <h2>Crie sua conta</h2>

                        <div className={styles.inputGroup}>
                            <Label
                                text="Nome completo:"
                                forID="name"
                                classWidth={"max-w-md"}
                            />
                            <Input
                                type="text"
                                placeholder={"Digite seu nome completo"}
                                classWidth={"max-w-md"}
                                id="name"
                                ref={nameInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <Label
                                text="Email:"
                                forID="email"
                                classWidth={"max-w-md"}
                            />
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
                                forID="password"
                                classWidth={"max-w-md"}
                            />
                            <Input
                                type="password"
                                placeholder={"Digite sua senha"}
                                classWidth={"max-w-md"}
                                id="password"
                                ref={passwordInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <Label
                                text="Confirmar senha:"
                                forID="confirmPassword"
                                classWidth={"max-w-md"}
                            />
                            <Input
                                type="password"
                                placeholder={"Confirme sua senha"}
                                classWidth={"max-w-md"}
                                id="confirmPassword"
                                ref={confirmPasswordInput}
                            />
                        </div>
                        <Button
                            type="submit"
                            text="Cadastrar"
                            classWidth={"max-w-md"}
                            icon={BiUserPlus}
                        />

                        <span className="max-w-md">
                            Já possui uma conta? <LinkRouter ref="/login" text="Faça login" />
                        </span>
                    </div>
                </Form>
            </div>

            <div className={styles.containerText}>
                <div className={styles.containerBgImg}>
                    <img src={bgImg} alt="" />
                </div>
                <FaUserPlus
                    size={300}
                    aria-label="Ícone de usuário com sinal de mais, representando criação de conta"
                    title="Crie sua conta"
                />

                <h2>Junte-se à nossa plataforma</h2>
                <h3>
                    Crie sua conta e tenha acesso completo aos seus arquivos com total segurança
                </h3>
            </div>
        </section>
    );
}