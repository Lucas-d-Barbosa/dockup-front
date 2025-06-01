import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { VerticalMenu } from "../../components/VerticalMenu/VerticalMenu";
import styles from "./MainLayout.module.css";
type MainLayoutProps = {
  children: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <section className={styles.section}>
      <Header />
      <VerticalMenu
        activeMenu={activeMenu}
        onToggle={() => setActiveMenu(!activeMenu)}
      />
      <main className={`${styles.main} ${activeMenu ? styles.activeMain : ""}`}>
        {children}
      </main>
    </section>
  );
}
