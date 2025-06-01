import styles from "./Footer.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Dockup. Todos os direitos reservados.
      </p>
      <p>
        Desenvolvido por <strong>Francisco Lucas</strong> e{" "}
        <strong>Leonardo Moraes</strong>.
      </p>
    </footer>
  );
}
