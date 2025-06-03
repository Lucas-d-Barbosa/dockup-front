import styles from "./LinkMenu.module.css";
type LinkMenu = {
  children: React.ReactNode;
};
export function LinkMenu({ children }: LinkMenu) {
  return <li className={styles.li}>{children}</li>;
}
