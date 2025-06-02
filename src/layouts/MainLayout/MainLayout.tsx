import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { VerticalMenu } from "../../components/VerticalMenu/VerticalMenu";
import styles from "./MainLayout.module.css";
import { Footer } from "../../components/Footer/Footer";
type MainLayoutProps = {
  pageTitle: string;
  optional?: React.ReactNode;
  children: React.ReactNode;
};
export function MainLayout({ children, optional, pageTitle }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <section className={styles.section}>
      <Header />
      <VerticalMenu
        activeMenu={activeMenu}
        onToggle={() => setActiveMenu(!activeMenu)}
      />
      <main className={`${styles.main} ${activeMenu ? styles.activeMain : ""}`}>
        <h1>{pageTitle}</h1>
        {optional && <div className={styles.optional}>{optional}</div>}
        <div className={styles.hero}>{children}</div>
        <div className={styles.footer}>
          <Footer></Footer>
        </div>
      </main>
    </section>
  );
}
